export function getLession() {
  return new Promise((resolve,reject)=>{
    setTimeout(() => {
      resolve({name:'学习PHP'})
    },1000)
  })
}