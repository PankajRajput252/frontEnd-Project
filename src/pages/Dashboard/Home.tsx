import PageMeta from "../../components/common/PageMeta";


// Import dashboard components
import DashboardMetricCard from "../../components/dashboard/DashboardMetricCard";
import AccountDetailsCard from "../../components/dashboard/AccountDetailsCard";
import BusinessDetailsCard from "../../components/dashboard/BusinessDetailsCard";


export default function Home() {
  return (
    <>
      <PageMeta
        title="StyloCoin Dashboard"
        description= "Affiliate and Mining Dashboard"
      />
      
      {/* Main Layout Container */}
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 text-gray-900 dark:text-white">
        {/* Header Section */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-700 dark:to-purple-700 p-6 rounded-b-2xl shadow-2xl">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-white mb-2">Welcome to StyloCoin</h1>
              <p className="text-blue-100 dark:text-blue-200">Your Crypto Investment Dashboard</p>
            </div>
            <div className="text-right">
              <p className="text-sm text-blue-200 dark:text-blue-300">Total Portfolio Value</p>
              <p className="text-2xl font-bold text-white">$0.00</p>
            </div>
          </div>
        </div>

        {/* Scrollable Main Content */}
        <main className="p-6">
          {/* Content Grid */}
          <div className="grid grid-cols-12 gap-6">
                
                {/* Wallet Section */}
                <div className="col-span-12 mb-6">
                  <h2 className="text-xl font-semibold text-gray-800 dark:text-white mb-4 flex items-center">
                    <svg className="w-6 h-6 mr-2 text-yellow-500 dark:text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M4 4a2 2 0 00-2 2v1h16V6a2 2 0 00-2-2H4zM18 9H2v5a2 2 0 002 2h12a2 2 0 002-2V9zM4 13a1 1 0 011-1h1a1 1 0 110 2H5a1 1 0 01-1-1zm5-1a1 1 0 100 2h1a1 1 0 100-2H9z"/>
                    </svg>
                    Wallets
                  </h2>
                </div>
                
                {/* Top Row: Wallets (4 columns) */}
                <div className="col-span-12 sm:col-span-6 lg:col-span-3">
                    <DashboardMetricCard 
                        title="Mine Wallet" 
                        amount="0.00" 
                        colorClass="bg-gradient-to-br from-orange-500 to-red-600" 
                        isWallet={true} 
                        walletIcon="mine"
                    />
                </div>
                <div className="col-span-12 sm:col-span-6 lg:col-span-3">
                    <DashboardMetricCard 
                        title="Node Wallet" 
                        amount="0.00" 
                        colorClass="bg-gradient-to-br from-blue-500 to-indigo-600" 
                        isWallet={true} 
                        walletIcon="node"
                    />
                </div>
                <div className="col-span-12 sm:col-span-6 lg:col-span-3">
                    <DashboardMetricCard 
                        title="Capital Wallet" 
                        amount="0.00" 
                        colorClass="bg-gradient-to-br from-green-500 to-emerald-600" 
                        isWallet={true} 
                        walletIcon="capital"
                    />
                </div>
                <div className="col-span-12 sm:col-span-6 lg:col-span-3">
                    <DashboardMetricCard 
                        title="Total Credit / Debit" 
                        amount="0.00 / 0.00" 
                        colorClass="bg-gradient-to-br from-purple-500 to-pink-600" 
                        isWallet={true} 
                        walletIcon="credit"
                    />
                </div>

                {/* Income Section */}
                <div className="col-span-12 mb-6 mt-8">
                  <h2 className="text-xl font-semibold text-gray-800 dark:text-white mb-4 flex items-center">
                    <svg className="w-6 h-6 mr-2 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 4a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"/>
                    </svg>
                    Income Streams
                  </h2>
                </div>

                {/* Income Metrics Grid */}
                <div className="col-span-12 sm:col-span-6 lg:col-span-3">
                    <DashboardMetricCard title="Service Generation Income" amount="0.00" />
                </div>
                <div className="col-span-12 sm:col-span-6 lg:col-span-3">
                    <DashboardMetricCard title="Matching Income" amount="0.00" />
                </div>
                <div className="col-span-12 sm:col-span-6 lg:col-span-3">
                    <DashboardMetricCard title="Club Income" amount="0.00" />
                </div>
                <div className="col-span-12 sm:col-span-6 lg:col-span-3">
                    <DashboardMetricCard title="Reward Income" amount="0.00" />
                </div>

                {/* Additional Income Metrics */}
                <div className="col-span-12 sm:col-span-6 lg:col-span-3">
                    <DashboardMetricCard title="Fast Track Bonus" amount="0.00" />
                </div>
                <div className="col-span-12 sm:col-span-6 lg:col-span-3">
                    <DashboardMetricCard title="Mining Profit Sharing" amount="0.00" />
                </div>
                <div className="col-span-12 sm:col-span-6 lg:col-span-3">
                    <DashboardMetricCard title="Mining Generation Income" amount="0.00" />
                </div>
                <div className="col-span-12 sm:col-span-6 lg:col-span-3">
                    <DashboardMetricCard title="Node Business Sharing" amount="0.00" />
                </div>

                {/* Account & Business Details Section */}
                <div className="col-span-12 mb-6 mt-8">
                  <h2 className="text-xl font-semibold text-gray-800 dark:text-white mb-4 flex items-center">
                    <svg className="w-6 h-6 mr-2 text-blue-500 dark:text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"/>
                    </svg>
                    Account & Business Details
                  </h2>
                </div>

                <div className="col-span-12 lg:col-span-5">
                    <AccountDetailsCard />
                </div>

                <div className="col-span-12 lg:col-span-7">
                    <BusinessDetailsCard />
                </div>

            </div>
          </main>
        </div>
      
    </>
  );
}