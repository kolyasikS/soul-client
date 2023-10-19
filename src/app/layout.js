import '../styles/globals.css'
import { Gantari } from 'next/font/google'
import LayoutContainer from "../processes/layoutContainer/LayoutContainer";

const inter = Gantari({ subsets: ['latin'] })


export default async function RootLayout({ children }) {

    return (
        <html lang="en" suppressHydrationWarning>
            <body className={inter.className} style={{marginRight: '0px !important'}}>
                <LayoutContainer>
                    {children}
                </LayoutContainer>
            </body>
        </html>
    )
}
