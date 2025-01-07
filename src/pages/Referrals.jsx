import { ReferralCard } from "../components/ReferralCard";
import { referrals } from "../dummyData.json/referrals";

const Referrals = () => {
  return (
    <div className="p-10">
      <h1 className="text-3xl font-bold text-gray-800 mb-8">
        Available Referrals
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {referrals.referrals.map((referral) => (
          <ReferralCard key={referral.id} referral={referral} />
        ))}
      </div>
    </div>
  );
};

export default Referrals;
