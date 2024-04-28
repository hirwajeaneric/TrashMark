import NavigationBar from "./NavigationBar"

const Header = () => {
  return (
    <div className="flex w-full border-b border-green-500 justify-center">
      <div className="flex max-w-screen-xl w-full justify-between items-center">
        <h1 className="text-green-500 text-2xl font-bold">TrashMark</h1>
        <NavigationBar />
      </div>
    </div>
  )
}

export default Header