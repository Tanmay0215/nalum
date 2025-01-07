export const ReferralCard = ({ referral }) => {
  return (
    <div className="bg-white rounded-xl shadow-md">
      <div className="p-6">
        <div className="mb-4">
          <h2 className="text-2xl font-bold text-gray-800">
            {referral.company}
          </h2>
          <p className="text-sm text-gray-500">{referral.location}</p>
        </div>

        <div className="mb-4">
          <div className="flex flex-wrap gap-2">
            {referral.roles.map((role) => (
              <span
                key={role.title}
                className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm"
              >
                {role.title} ({role.technology})
              </span>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4 mb-4">
          <div>
            <h3 className="text-sm font-semibold text-gray-700">
              Eligible Batches
            </h3>
            <p className="text-sm text-gray-600">
              {referral.eligibleBatches.join(", ")}
            </p>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-gray-700">Stipend</h3>
            <p className="text-sm text-gray-600">
              {referral.stipend.min.toLocaleString()} -{" "}
              {referral.stipend.max.toLocaleString()}{" "}
              {referral.stipend.currency}/{referral.stipend.period}
            </p>
          </div>
        </div>

        <div className="mb-4">
          <span
            className={`px-3 py-1 rounded-full text-sm ${
              referral.ppo
                ? "bg-green-100 text-green-800"
                : "bg-gray-100 text-gray-800"
            }`}
          >
            {referral.ppo ? "PPO after internship" : "No PPO"}
          </span>
        </div>

        <div className="mt-6 pt-4 border-t border-gray-200">
          <h3 className="text-sm font-semibold text-gray-700 mb-2">
            How to Apply
          </h3>
          <div className="flex items-center">
            <span className="text-sm text-gray-600">
              {referral.applicationProcess.type === "email" ? "📧" : "🔗"}
            </span>
            <a
              href={
                referral.applicationProcess.type === "email"
                  ? `mailto:${referral.applicationProcess.contact}`
                  : referral.applicationProcess.contact
              }
              className="ml-2 text-blue-600 hover:text-blue-800 text-sm"
            >
              {referral.applicationProcess.contact}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
