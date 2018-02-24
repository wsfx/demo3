const getRouterData = () => {
  const routers = {
    '/': {
      components: import('../layout/BaseLayout') 
    },
    '/index': {
      components: import('../routes/IndexPage') 
    },
    '/users': {
      components: import('../layout/UserLayout') 
    },
    '/users/index': {
      components: import('../routes/Users') 
    }
  }
}

export default getRouterData