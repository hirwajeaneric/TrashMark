import UserAccountForm from "../../components/form/user-forms/UserAccountForm";

const AccountHome = () => {
  return (
    <div className="mx-auto max-w-screen-xl px-4 pb-8 sm:px-6 sm:py-12 lg:px-8">
      <h2 className="text-xl sm:text-2xl md:text-3xl font-bold">My Account</h2>
      <p className="text-sm text-slate-700 mb-4">View and update your profile here</p>
      <UserAccountForm />
    </div>
  )
}

export default AccountHome