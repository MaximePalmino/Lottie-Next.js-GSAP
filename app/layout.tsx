import type {Metadata} from 'next'
import {Inter} from 'next/font/google'
import './globals.css'
// import {Suspense} from "react";
// import Loading from "@/app/components/Loading";
const inter = Inter({subsets: ['latin']})

export const metadata: Metadata = {
    title: 'Hold on to those that make your soul shine',
    description: 'Made with Illustrator, AE, Premiere pro, Lottie and Nextjs',
}

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
        {/*<Suspense fallback={<Loading/>}>*/}
            <body className={inter.className}>{children}</body>
        {/*</Suspense>*/}
        </html>
    )
}
