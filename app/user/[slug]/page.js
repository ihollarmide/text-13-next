import Link from "next/link";
import Image from "next/image";
import getUser from "../../../utils/getUser";

export default async function User({ params }) {
  const user = await getUser(params.slug);

  return (
    <>
      <>
        <Link href="/users" className="user-details__back-btn">
          <span className="user-details__back-btn-label">Back to Users</span>
        </Link>

        <section className="user-details__menu">
          <h1 className="user-details__heading">User Details</h1>
          <div className="user-details__controls">
            <button className="user-details__controls-btn user-details__controls-btn--blacklist">
              Blacklist User
            </button>
            <button className="user-details__controls-btn user-details__controls-btn--activate">
              Activate User
            </button>
          </div>
        </section>
        <section className="user-details__header">
          <div className="scrollable-with-no-scrollbars-x user-details__snap-view-wrapper">
            <div className="user-details__snap-view">
              <Image
                src={user.profile.avatar}
                className="user-details__avatar"
                alt={`${user.profile.firstName} ${user.profile.lastName}`}
                width={60}
                height={60}
              />
              <div className="user-details__name-wrapper">
                <h2 className="user-details__name">
                  {user.profile.firstName} {user.profile.lastName}
                </h2>
                <p className="user-details__acct-no">{user.phoneNumber}</p>
              </div>
              <div className="user-details__account-wrapper">
                <p className="user-details__account-balance">
                  &#8358;{user.accountBalance}
                </p>
                <p className="user-details__account-details">
                  {user.accountNumber}/Providus Bank
                </p>
              </div>
            </div>
          </div>

          <div className="scrollable-with-no-scrollbars-x user-details__nav-wrapper">
            <div className="user-details__nav">
              <h4 className="user-details__nav-item user-details__nav-item--active">
                General Details
              </h4>
              <h4 className="user-details__nav-item">Documents</h4>
              <h4 className="user-details__nav-item">Bank Details</h4>
              <h4 className="user-details__nav-item">Loans</h4>
              <h4 className="user-details__nav-item">Savings</h4>
            </div>
          </div>
        </section>
        <section className="user-details__body">
          {/* Personal Information */}
          <div className="user-details__group">
            <h5 className="user-details__group-title">Personal Information</h5>

            <div className="user-details__field-row user-details__field-row--five">
              <div className="user-details__field-col">
                <p className="user-details__field-title">Full Name</p>
                <p className="user-details__field-value">
                  {user.profile.firstName} {user.profile.lastName}
                </p>
              </div>
              <div className="user-details__field-col">
                <p className="user-details__field-title">Phone Number</p>
                <p className="user-details__field-value">
                  {user.profile.phoneNumber}
                </p>
              </div>
              <div className="user-details__field-col">
                <p className="user-details__field-title">Email Address</p>
                <p className="user-details__field-value">{user.email}</p>
              </div>
              <div className="user-details__field-col">
                <p className="user-details__field-title">BVN</p>
                <p className="user-details__field-value">{user.profile.bvn}</p>
              </div>
              <div className="user-details__field-col">
                <p className="user-details__field-title">Gender</p>
                <p className="user-details__field-value">
                  {user.profile.gender}
                </p>
              </div>
              <div className="user-details__field-col">
                <p className="user-details__field-title">Marital Status</p>
                <p className="user-details__field-value">N/A</p>
              </div>
              <div className="user-details__field-col">
                <p className="user-details__field-title">Children</p>
                <p className="user-details__field-value">N/A</p>
              </div>
              <div className="user-details__field-col">
                <p className="user-details__field-title">Type of Residence</p>
                <p className="user-details__field-value">N/A</p>
              </div>
            </div>
          </div>

          {/* Education and Employment */}
          <div className="user-details__group">
            <h5 className="user-details__group-title">
              Education and Employment
            </h5>

            <div className="user-details__field-row user-details__field-row--four">
              <div className="user-details__field-col">
                <p className="user-details__field-title">Level of Education</p>
                <p className="user-details__field-value">
                  {user.education.level}
                </p>
              </div>
              <div className="user-details__field-col">
                <p className="user-details__field-title">Employment Status</p>
                <p className="user-details__field-value">
                  {user.education.employmentStatus}
                </p>
              </div>
              <div className="user-details__field-col">
                <p className="user-details__field-title">
                  Sector of Employment
                </p>
                <p className="user-details__field-value">
                  {user.education.sector}
                </p>
              </div>
              <div className="user-details__field-col">
                <p className="user-details__field-title">
                  Duration of Employment
                </p>
                <p className="user-details__field-value">
                  {user.education.duration}
                </p>
              </div>
              <div className="user-details__field-col">
                <p className="user-details__field-title">Office Email</p>
                <p className="user-details__field-value">
                  {user.education.officeEmail}
                </p>
              </div>

              <div className="user-details__field-col">
                <p className="user-details__field-title">Loan Repayment</p>
                <p className="user-details__field-value">
                  &#8358;{user.education.loanRepayment}
                </p>
              </div>
            </div>
          </div>

          {/* Social Media Details */}
          <div className="user-details__group">
            <h5 className="user-details__group-title">Socials</h5>

            <div className="user-details__field-row user-details__field-row--five">
              <div className="user-details__field-col">
                <p className="user-details__field-title">Twitter</p>
                <p className="user-details__field-value">
                  {user.socials.twitter}
                </p>
              </div>
              <div className="user-details__field-col">
                <p className="user-details__field-title">Facebook</p>
                <p className="user-details__field-value">
                  {user.socials.facebook}
                </p>
              </div>
              <div className="user-details__field-col">
                <p className="user-details__field-title">Instagram</p>
                <p className="user-details__field-value">
                  {user.socials.instagram}
                </p>
              </div>
            </div>
          </div>

          {/* Guarantor Details */}
          <div className="user-details__group user-details__group--last">
            <h5 className="user-details__group-title">Guarantor</h5>

            <div className="user-details__field-row user-details__field-row--four">
              <div className="user-details__field-col">
                <p className="user-details__field-title">Full Name</p>
                <p className="user-details__field-value">
                  {user.guarantor.firstName} {user.guarantor.lastName}
                </p>
              </div>
              <div className="user-details__field-col">
                <p className="user-details__field-title">Phone Number</p>
                <p className="user-details__field-value">
                  {user.guarantor.phoneNumber}
                </p>
              </div>
              <div className="user-details__field-col">
                <p className="user-details__field-title">Email Address</p>
                <p className="user-details__field-value">N/A</p>
              </div>
              <div className="user-details__field-col">
                <p className="user-details__field-title">Relationship</p>
                <p className="user-details__field-value">N/A</p>
              </div>
            </div>
          </div>
        </section>
      </>
    </>
  );
}
