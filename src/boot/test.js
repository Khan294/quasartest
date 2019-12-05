// import something here

// "async" is optional
export default async ({ store }) => {
  console.log('Client boot before setting state:', store.state.teststore.testState)
  await store.dispatch('teststore/setState')
  console.log('Client boot after setting state:', store.state.teststore.testState)
}
