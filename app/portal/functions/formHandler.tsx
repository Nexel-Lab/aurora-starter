/* eslint-disable react-hooks/rules-of-hooks */
'use client'

import { useState } from 'react'
import { toast } from 'react-toastify'

type tForm = {
  type?: string
  email?: ''
  password?: ''
}

const formHandler = (
  initial: tForm = {
    email: '',
    password: '',
  },
) => {
  const [formData, setFormData] = useState(initial)

  const handleChange = (e: any) => {
    const value =
      e.target.type === 'checkbox' ? e.target.checked : e.target.value
    const name = e.target.name
    setFormData((state) => ({ ...state, [name]: value }))
  }

  const executeForm = async (e: any, callback: any) => {
    e.preventDefault()
    await callback(formData, toast)
  }

  return { handleChange, executeForm }
}

export { formHandler }
