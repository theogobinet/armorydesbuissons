// @ts-nocheck
import I18nProvider from 'next-translate/I18nProvider'
import React from 'react'
import C from '../../pages_'
import ns0 from '../../public/locales/fr/common.json'
import ns1 from '../../public/locales/fr/home.json'

const namespaces = { 'common': ns0, 'home': ns1 }

export default function Page(p){
  return (
    <I18nProvider 
      lang="fr" 
      namespaces={namespaces}  
      internals={{"defaultLanguage":"en","isStaticMode":true}}
    >
      <C {...p} />
    </I18nProvider>
  )
}

Page = Object.assign(Page, { ...C })

if(C && C.getInitialProps) {
  Page.getInitialProps = ctx => C.getInitialProps({ ...ctx, lang: 'fr'})
}








