import { allContact } from '@/lib/data'
import React from 'react'

const AllContact = async () => {
    const contacts = await allContact();
    return (

        <div className="overflow-x-auto" >

            <table className="min-w-full divide-y-2 divide-gray-200 bg-white text-sm">

                <thead className="ltr:text-left rtl:text-right">
                    <tr>
                        <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Message</th>
                        <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Email</th>
                        <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Delete</th>
                        <th className="px-4 py-2"></th>
                    </tr>
                </thead>

                <tbody className="divide-y divide-gray-200">
                    {contacts.map((contact) => (
                        <tr className='' key={contact.uid}>
                            <td className="whitespace-nowrap px-4 py-2  font-medium text-gray-900">{contact.user_message}</td>
                            <td className="whitespace-nowrap px-4 py-2 text-gray-700">{contact.user_email}</td>
                            <td className="whitespace-nowrap px-4 py-2">
                                <a
                                    href="#"
                                    className="inline-block rounded bg-indigo-600 px-4 py-2 text-xs font-medium text-white hover:bg-indigo-700"
                                >
                                    View
                                </a>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div >
    )
}

export default AllContact