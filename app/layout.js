import '@styles/globals.css'

export const metadata = {
  title: 'DevBrainz - A community of great minds',
  description: 'Generated by create next app',
  icons: {
    icon: {
      url: "/favicon.ico",
    },
    shortcut: { url: "/favicon.ico" },
  }
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className='main'>
          <div className='gradient'/>
        </div>
        <main className='app'>
          {children}
        </main>
      </body>
    </html>
  )
}
