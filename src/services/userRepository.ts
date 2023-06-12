export function createUser(details: { name: string; email: string }) {
  return new Promise((resolve, reject) => {
    if (!details.name || !details.email) reject()

    resolve(details)
  })
}
