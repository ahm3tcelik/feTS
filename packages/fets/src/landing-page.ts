export default "<!doctype html><html lang=en><head><meta charset=utf-8><title>Welcome to feTS</title><base href=__BASE_PATH__><link rel=icon href=https://raw.githubusercontent.com/ardatan/feTS/main/website/public/favicon.ico><style>body,html{padding:0;margin:0;height:100%;font-family:Inter,-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Oxygen,Ubuntu,Cantarell,'Fira Sans','Droid Sans','Helvetica Neue',sans-serif;color:#fff;background-color:#000}main>section.hero{display:flex;height:90vh;justify-content:center;align-items:center;flex-direction:column}.logo{display:flex;align-items:center}.buttons{margin-top:24px}h1{font-size:80px}h2{color:#888;max-width:50%;margin-top:0;text-align:center}a{color:#fff;text-decoration:none;margin-left:10px;margin-right:10px;font-weight:700;transition:color .3s ease;padding:4px;overflow:visible}a.swagger-ui:hover{color:rgba(255,0,255,.7)}a.docs:hover{color:rgba(28,200,238,.7)}a.oas:hover{color:rgba(125,85,245,.7)}svg{margin-right:24px}.not-what-your-looking-for{margin-top:5vh}.not-what-your-looking-for>*{margin-left:auto;margin-right:auto}.not-what-your-looking-for>p{text-align:center}.not-what-your-looking-for>h2{color:#464646}.not-what-your-looking-for>p{max-width:600px;line-height:1.3em}.not-what-your-looking-for>pre{max-width:300px}</style></head><body id=body><main><section class=hero><div class=logo><div><svg height=150 viewBox=\"0 0 34 36\" fill=none xmlns=http://www.w3.org/2000/svg class=\"mr-1.5 h-9 w-9\"><g clip-path=url(#clip0_238_881)><path fill-rule=evenodd clip-rule=evenodd d=\"M7.29206 10.6399C9.07389 5.32261 14.0961 1.4912 20.0133 1.4912C27.4213 1.4912 33.4267 7.49658 33.4267 14.9046C33.4267 20.9724 29.3976 26.0992 23.8689 27.7556V31.8839C23.8689 33.3336 22.6937 34.5088 21.2441 34.5088H2.62488C1.1752 34.5088 0 33.3336 0 31.8839V13.2647C0 11.8151 1.1752 10.6399 2.62488 10.6399H7.29206ZM9.69332 10.6399C11.3687 6.59027 15.3582 3.7411 20.0133 3.7411C26.1787 3.7411 31.1768 8.73917 31.1768 14.9046C31.1768 19.7148 28.1344 23.8145 23.8689 25.3844V13.2647C23.8689 11.8151 22.6937 10.6399 21.2441 10.6399H9.69332ZM21.619 28.2229V31.8839C21.619 32.091 21.4511 32.2589 21.2441 32.2589H2.62488C2.41778 32.2589 2.24989 32.091 2.24989 31.8839V13.2647C2.24989 13.0577 2.41778 12.8898 2.62488 12.8898H6.75019C6.65118 13.547 6.59987 14.2198 6.59987 14.9046C6.59987 22.3126 12.6052 28.318 20.0133 28.318C20.5567 28.318 21.0925 28.2857 21.619 28.2229ZM20.283 16.3302L18.5198 14.9326L15.1078 19.237L12.9334 17.2179L11.4025 18.8667L14.4683 21.7134C14.6981 21.9268 15.0065 22.0346 15.3192 22.0108C15.6319 21.9869 15.9205 21.8336 16.1153 21.5879L20.283 16.3302Z\" fill=#1886FF></path></g><defs><clipPath id=clip0_238_881><rect width=33.4267 height=36 fill=white></rect></clipPath></defs></svg></div><h1>feTS</h1></div><h2>404 Not Found</h2><div class=buttons><a href=https://the-guild.dev/openapi/fets/server/quick-start class=docs target=_blank>Read the Docs</a> <a download=openapi.json href=__OAS_PATH__ class=oas>Download OpenAPI Spec </a><a href=__SWAGGER_UI_PATH__ class=swagger-ui>Visit Swagger UI</a></div></section><section class=not-what-your-looking-for><h2>Not the page you are looking for? 👀</h2><p>This page is shown be default whenever a 404 is hit.<br>You can disable this by behavior via the <code>landingPage</code> option.</p><pre>\n          <code>\nimport { createRouter } from 'fets';\n\nconst router = createRouter({\n  landingPage: false\n})\n          </code>\n        </pre><p>If you expected this page to be the Swagger UI route, you need to configure feTS. Currently, the Swagger UI route is configured to be on <code>__SWAGGER_UI_PATH__</code>.</p><pre>\n          <code>\nimport { createRouter } from 'fets';\n\nconst router = createRouter({\n  swaggerUI: {\n    endpoint: '__REQUEST_PATH__'\n  },\n})\n          </code>\n        </pre></section></main></body></html>";
