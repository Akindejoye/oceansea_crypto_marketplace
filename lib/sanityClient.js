import sanityClient from '@sanity/client'

export const client = sanityClient({
  projectId: '9qzwgj6o',
  dataset: 'production',
  apiVersion: '2021-03-25',
  token:
    'skFaM1DcZAfPtXmNaE1q25N8M5BYXA8Fy4QhEwv95vuK9m3e0MyyHQ3EzOnxmnEeLJg1oLqF3ki9jGfyvcBJ3m0KcTRcj4SViPySPNT3Zsu7eB8M1A1OekJXyAZUIzlZ06QKdBEFWtsKs7Vaqe1cLrqSrK5aWygPpbh0MjRV50cPMv8nWQex',
  useCdn: false,
})