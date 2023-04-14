import Button from "../buttons/Button"

export default function CardProjects({data}: any) {
  return (
    <div className='bg-LightModeWhite-50 dark:bg-DarkModeDarkGrey-50 p-10 w-10/12 mx-auto rounded-xl'>
      <h4 className="text-2xl text-center mb-2 font-medium">{data.title}</h4>
      <div className="relative w-full">
        <div className='h-full md:w-1/2 w-full'>
          <img
            className="object-cover w-full"
            src={data.front}
            alt=""
          />
        </div>
        <div className="static md:absolute dark:bg-DarkModeDarkGrey bg-LightModeWhite md:w-2/3 top-1/2 md:-translate-y-1/2 right-0 p-8 rounded-xl shadow-lg dark:shadow-DarkModeDarkGrey">
          <p className="mb-10">
            {/* Online store created for YNaara Designs. This application works as a shopping cart to keep the user's order until they decide to complete the purchase. Since YNaara prefers to serve its buyers through WhatsApp Messenger, the application generates a personalized message to the number designated by YNaara to complete the order. */}
            {data.description}
          </p>
          <div className="flex justify-around">
            <Button
              onClick={() => window.open(data.url.demo)}
            >View Demo</Button>
            <Button
              onClick={() => window.open(data.url.code)}
            >View Code</Button>
          </div>
        </div>
      </div>
    </div>
  )
}
