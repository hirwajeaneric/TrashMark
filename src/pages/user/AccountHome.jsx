import UserAccountForm from "../../components/form/user-forms/UserAccountForm";

const AccountHome = () => {
  const updateProfile = (e) => {
    e.preventDefault();


  }

  return (
    <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
      <UserAccountForm updateProfile={updateProfile} />
    </div>
  )
}

export default AccountHome