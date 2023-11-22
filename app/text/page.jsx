import React from 'react'

const Page = () => {

    const handleForm = async (formData) => {
        "use server";
        console.log(formData)
        const username =formData.get("username")
        console.log("heelo", username)

    }
  return (
    <div>
        <form action={handleForm}>
            <input type="text" name='username' />
            <button>send</button>
        </form>
    </div>
  )
}

export default Page