import Button from "../buttons/Button"

export default function CardProjects() {
  return (
    <div className='bg-LightModeWhite-50 dark:bg-DarkModeDarkGrey-50 p-10 w-10/12 mx-auto rounded-xl'>
      <h4 className="text-2xl text-center mb-2 font-medium">YNaara Designs Store</h4>
      <div className="relative w-full">
        <div className='h-full w-full'>
          <img className="object-cover w-1/2" src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1200px-Unofficial_JavaScript_logo_2.svg.png" alt="" />
        </div>
        <div className="absolute dark:bg-DarkModeDarkGrey bg-LightModeWhite w-2/3 top-1/2 -translate-y-1/2 right-0 p-8 rounded-xl shadow-lg dark:shadow-DarkModeDarkGrey">
          <p className="mb-10">Online store created for YNaara Designs. This application works as a shopping cart to keep the user's order until they decide to complete the purchase. Since YNaara prefers to serve its buyers through WhatsApp Messenger, the application generates a personalized message to the number designated by YNaara to complete the order.</p>
          <div className="flex justify-around">
            <Button>View Demo</Button>
            <Button>View Code</Button>
          </div>
        </div>
      </div>
    </div>
  )
}
