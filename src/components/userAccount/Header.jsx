import NavigationBar from "./NavigationBar"

const Header = () => {
  return (
    <div className="flex w-full border-b-2 border-green-800 justify-center h-20">
      <div className="flex mx-auto px-4 sm:px-6 lg:px-8 max-w-screen-xl w-full justify-between items-center">
        <h1 className="text-green-800 text-2xl font-bold">TrashMark</h1>
        <NavigationBar />
      </div>
    </div>
  )
}

export default Header