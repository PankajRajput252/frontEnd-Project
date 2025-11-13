import React from 'react';

const AccountDetailsCard: React.FC = () => {
  const accountData = [
    { label: 'Affiliate ID', value: 'NODE00441218' },
    { label: 'Service', value: 'Inactive' },
    { label: 'Mining Investment', value: '0.0000' },
    { label: 'Rank', value: 'NA' },
    { label: 'Date of Registration', value: '10/1/2025 2:31:21 PM' },
    { label: 'Date of Activation', value: 'N/A' },
  ];

  return (
    <div className="p-6 bg-white dark:bg-gradient-to-br dark:from-gray-800 dark:to-gray-700 rounded-xl shadow-xl h-full flex flex-col border border-gray-200 dark:border-gray-600">
        {/* User Info Section */}
        <div className="flex items-center space-x-4 mb-6">
            <div className="h-12 w-12 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white font-bold text-lg shadow-lg">
                AI
            </div>
            <div className="flex flex-col">
                <div className="font-bold text-gray-800 dark:text-white text-xl">Alaa Ibrahim</div>
                <div className="text-sm text-yellow-500 dark:text-yellow-400 font-medium">NODE00441218</div>
            </div>
        </div>
        
        {/* Details Grid */}
        <div className="grid grid-cols-2 gap-y-4 gap-x-4 text-sm mb-6">
            {accountData.map((item, index) => (
                <React.Fragment key={index}>
                    <div className="text-gray-600 dark:text-gray-300 font-medium">{item.label}</div>
                    <div className="text-gray-800 dark:text-white font-semibold text-right">{item.value}</div>
                </React.Fragment>
            ))}
        </div>
        
        {/* Edit Profile Link */}
        <div className="text-right mb-4">
            <a href="/profile" className="text-blue-500 dark:text-blue-400 text-sm hover:text-blue-600 dark:hover:text-blue-300 transition-colors font-medium">
                Edit profile →
            </a>
        </div>
        
        {/* Button */}
        <button className="w-full mt-auto py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-500 hover:to-purple-500 transition duration-300 shadow-lg">
            View Closing Report
        </button>
    </div>
  );
};

export default AccountDetailsCard;