import type { Session } from 'next-auth'
import { signOut } from 'next-auth/react'
import clsx from 'clsx'
import { useUiState } from '@/store'
import {
  TbLayoutDashboard,
  TbCalendar,
  TbCalendarPlus,
  TbSubtask,
  TbTimelineEventText,
  TbSettings,
  TbUser,
  TbUserPlus,
  TbUsers,
  TbUsersPlus,
  TbCreditCard,
  TbLogout,
  TbMail,
  TbMessageCirclePlus,
  TbSquarePlus,
  TbColorSwatch,
  TbMoonStars,
  TbSun,
  TbCheck,
} from 'react-icons/tb'
import { CgViewComfortable } from 'react-icons/cg'
import { Badge, User } from '@nextui-org/react'
import { Avatar, AvatarFallback, AvatarImage } from '@components/ui/avatar'
import { Button } from '@components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from '@components/ui/dropdown-menu'

export const NavUser = ({ session }: { session: Session }) => {
  const [_dark, _setDark] = useUiState((st) => [st.dark, st.setDark])

  const notification = ['aa']
  return (
    <>
      <Badge
        content={notification.length || ''}
        color='danger'
        shape='circle'
        placement='bottom-left'
        className={clsx(
          'cursor-pointer',
          notification.length === 0 && 'hidden',
        )}
      >
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Avatar className='h-9 w-9 cursor-pointer'>
              <AvatarImage
                src={session.user.image || '/user/default/profile.png'}
                alt={'@' + session.user.name}
              />
              <AvatarFallback>
                {session.user.name?.slice(2) || 'WT'}
              </AvatarFallback>
            </Avatar>
          </DropdownMenuTrigger>
          <DropdownMenuContent className='w-56'>
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuGroup>
              <DropdownMenuItem className='flex justify-between'>
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
                <Button variant='outline'>
                  <TbSettings />
                </Button>
              </DropdownMenuItem>
            </DropdownMenuGroup>
            <DropdownMenuSeparator />
            <DropdownMenuGroup>
              <DropdownMenuItem className='flex cursor-pointer justify-between [&>div:first-child]:flex'>
                <div>
                  <TbCalendarPlus className='mr-2 h-4 w-4' />
                  <span>New task</span>
                </div>
                <kbd className='pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground opacity-100'>
                  {/* <span className='text-xs'>⇧</span>N */}
                  <span className='text-xs'>⌘</span>B
                </kbd>
              </DropdownMenuItem>
              <DropdownMenuItem className='flex cursor-pointer justify-between [&>div:first-child]:flex'>
                <div>
                  <TbLayoutDashboard className='mr-2 h-4 w-4' />
                  <span>Dashboard</span>
                </div>

                <kbd className='pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground opacity-100'>
                  Q
                </kbd>
              </DropdownMenuItem>
              <DropdownMenuSub>
                <DropdownMenuSubTrigger>
                  <CgViewComfortable className='mr-2 h-4 w-4' />
                  <span>View Panel</span>
                </DropdownMenuSubTrigger>
                <DropdownMenuPortal>
                  <DropdownMenuSubContent>
                    <DropdownMenuItem className='flex cursor-pointer justify-between [&>div:first-child]:flex'>
                      <div>
                        <TbSubtask className='mr-2 h-4 w-4' />
                        <span>Task list</span>
                      </div>
                      <kbd className='pointer-events-none ml-2 inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground opacity-100'>
                        W
                      </kbd>
                    </DropdownMenuItem>
                    <DropdownMenuItem className='flex cursor-pointer justify-between [&>div:first-child]:flex'>
                      <div>
                        <TbCalendar className='mr-2 h-4 w-4' />
                        <span>Calendar</span>
                      </div>
                      <kbd className='pointer-events-none ml-2 inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground opacity-100'>
                        E
                      </kbd>
                    </DropdownMenuItem>
                    <DropdownMenuItem className='flex cursor-pointer justify-between [&>div:first-child]:flex'>
                      <div>
                        <TbTimelineEventText className='mr-2 h-4 w-4' />
                        <span>Timeline</span>
                      </div>
                      <kbd className='pointer-events-none ml-2 inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground opacity-100'>
                        R
                      </kbd>
                    </DropdownMenuItem>
                  </DropdownMenuSubContent>
                </DropdownMenuPortal>
              </DropdownMenuSub>
            </DropdownMenuGroup>
            <DropdownMenuSeparator />
            <DropdownMenuGroup>
              <DropdownMenuItem>
                <TbUser className='mr-2 h-4 w-4' />
                <span>Profile</span>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <TbCreditCard className='mr-2 h-4 w-4' />
                <span>Billing</span>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <TbSettings className='mr-2 h-4 w-4' />
                <span>Settings</span>
              </DropdownMenuItem>
              <DropdownMenuSub>
                <DropdownMenuSubTrigger>
                  <TbColorSwatch className='mr-2 h-4 w-4' />
                  <span>Theme</span>
                </DropdownMenuSubTrigger>
                <DropdownMenuPortal>
                  <DropdownMenuSubContent>
                    <DropdownMenuItem
                      onClick={() => _setDark(false)}
                      className='flex justify-between [&>div:first-child]:flex'
                    >
                      <div>
                        <TbSun className='mr-2 h-4 w-4' />
                        <span>Light</span>
                      </div>

                      {!_dark && <TbCheck />}
                    </DropdownMenuItem>
                    <DropdownMenuItem
                      onClick={() => _setDark(true)}
                      className='flex justify-between [&>div:first-child]:flex'
                    >
                      <div>
                        <TbMoonStars className='mr-2 h-4 w-4' />
                        <span>Dark</span>
                      </div>

                      {_dark && <TbCheck />}
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                  </DropdownMenuSubContent>
                </DropdownMenuPortal>
              </DropdownMenuSub>
            </DropdownMenuGroup>
            <DropdownMenuSeparator />
            <DropdownMenuGroup>
              <DropdownMenuItem>
                <TbUsers className='mr-2 h-4 w-4' />
                <span>Team</span>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <TbUsersPlus className='mr-2 h-4 w-4' />
                <span>New Team</span>
                {/* <DropdownMenuShortcut>⌘+T</DropdownMenuShortcut> */}
              </DropdownMenuItem>
              <DropdownMenuSub>
                <DropdownMenuSubTrigger>
                  <TbUserPlus className='mr-2 h-4 w-4' />
                  <span>Invite users</span>
                </DropdownMenuSubTrigger>
                <DropdownMenuPortal>
                  <DropdownMenuSubContent>
                    <DropdownMenuItem>
                      <TbMail className='mr-2 h-4 w-4' />
                      <span>Email</span>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <TbMessageCirclePlus className='mr-2 h-4 w-4' />
                      <span>Message</span>
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>
                      <TbSquarePlus className='mr-2 h-4 w-4' />
                      <span>More...</span>
                    </DropdownMenuItem>
                  </DropdownMenuSubContent>
                </DropdownMenuPortal>
              </DropdownMenuSub>
            </DropdownMenuGroup>
            <DropdownMenuSeparator />
            <DropdownMenuItem onClick={() => signOut()}>
              <TbLogout className='mr-2 h-4 w-4' />
              <span>Log out</span>
              {/* <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut> */}
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </Badge>
    </>
  )
}
