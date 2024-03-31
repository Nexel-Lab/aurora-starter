'use client'

import Image from 'next/image'
import { signOut } from 'next-auth/react'
import type { Session } from 'next-auth'
import {
  Input,
  User,
  Avatar,
  Badge,
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownSection,
  DropdownItem,
} from '@nextui-org/react'
import { SearchIcon } from './SearchIcon'
import { PlusIcon } from './PlusIcon'

const Nav = ({ session }: { session: Session }) => {
  return (
    <>
      <div className='flex h-16 w-full justify-between bg-white/[0.07] p-4'>
        <div className='flex h-full'>
          <div className='mr-4 flex items-center'>
            <div className='relative flex h-full w-16'>
              <Image
                alt='logo'
                src='/logo.png'
                style={{ objectFit: 'contain' }}
                fill
              />
            </div>
            <h1 className='pl-1 text-xl font-bold'>WindTour</h1>
          </div>
          <div className='flex w-[340px] items-center justify-center'>
            <Input
              isClearable
              radius='md'
              classNames={{
                input: [
                  'bg-transparent',
                  'text-black/90 dark:text-white/90',
                  'placeholder:text-default-700/50 dark:placeholder:text-white/60',
                ],
                innerWrapper: 'bg-transparent',
                inputWrapper: [
                  'shadow-xl',
                  'bg-default-200/50',
                  'dark:bg-default/60',
                  'backdrop-blur-xl',
                  'backdrop-saturate-200',
                  'hover:bg-default-200/70',
                  'dark:hover:bg-default/70',
                  'group-data-[focused=true]:bg-default-200/50',
                  'dark:group-data-[focused=true]:bg-default/60',
                  '!cursor-text',
                ],
              }}
              placeholder='Type to search...'
              startContent={
                <SearchIcon className='pointer-events-none mb-0.5 flex-shrink-0 text-black/50 text-slate-400 dark:text-white/90' />
              }
            />
          </div>
        </div>
        <div>
          <Badge
            content='5'
            color='danger'
            shape='circle'
            placement='bottom-left'
          >
            <Dropdown placement='bottom-start' backdrop='blur'>
              <DropdownTrigger>
                <User
                  as='button'
                  avatarProps={{
                    isBordered: true,
                    src: session.user.image || '/user/default/profile.png',
                  }}
                  className='transition-transform'
                  name={session.user.name}
                  description={'@' + session.user.email?.split('@')[0]}
                />
              </DropdownTrigger>
              <DropdownMenu
                aria-label='Custom item styles'
                disabledKeys={['profile']}
                className='p-3'
                itemClasses={{
                  base: [
                    'rounded-md',
                    'text-default-500',
                    'transition-opacity',
                    'data-[hover=true]:text-foreground',
                    'data-[hover=true]:bg-default-100',
                    'dark:data-[hover=true]:bg-default-50',
                    'data-[selectable=true]:focus:bg-default-50',
                    'data-[pressed=true]:opacity-70',
                    'data-[focus-visible=true]:ring-default-500',
                  ],
                }}
              >
                <DropdownSection aria-label='Profile & Actions' showDivider>
                  <DropdownItem
                    isReadOnly
                    key='profile'
                    className='h-14 gap-2 opacity-100'
                  >
                    <User
                      name={session.user.name}
                      description={'@' + session.user.email?.split('@')[0]}
                      classNames={{
                        name: 'text-default-600',
                        description: 'text-default-500',
                      }}
                      avatarProps={{
                        size: 'sm',
                        src: session.user.image || '/user/default/profile.png',
                      }}
                    />
                  </DropdownItem>
                  <DropdownItem key='dashboard'>Dashboard</DropdownItem>
                  <DropdownItem key='settings'>Settings</DropdownItem>
                  <DropdownItem
                    key='new_project'
                    endContent={<PlusIcon className='text-large' />}
                  >
                    New Project
                  </DropdownItem>
                  <DropdownItem key='analytics'>Analytics</DropdownItem>
                  <DropdownItem key='system'>System</DropdownItem>
                </DropdownSection>
                <DropdownSection aria-label='Preferences' showDivider>
                  <DropdownItem key='quick_search' shortcut='⌘K'>
                    Quick search
                  </DropdownItem>
                  <DropdownItem
                    isReadOnly
                    key='theme'
                    className='cursor-default'
                    endContent={
                      <select
                        className='z-10 w-16 rounded-md border-small border-default-300 bg-transparent py-0.5 text-tiny text-default-500 outline-none group-data-[hover=true]:border-default-500 dark:border-default-200'
                        id='theme'
                        name='theme'
                      >
                        <option>System</option>
                        <option>Dark</option>
                        <option>Light</option>
                      </select>
                    }
                  >
                    Theme
                  </DropdownItem>
                </DropdownSection>
                <DropdownSection aria-label='Help & Feedback'>
                  <DropdownItem key='help_and_feedback'>
                    Help & Feedback
                  </DropdownItem>
                  <DropdownItem
                    key='logout'
                    color='danger'
                    onClick={() => signOut()}
                  >
                    Log Out
                  </DropdownItem>
                </DropdownSection>
              </DropdownMenu>
            </Dropdown>
          </Badge>
        </div>
      </div>
    </>
  )
}

export { Nav }
