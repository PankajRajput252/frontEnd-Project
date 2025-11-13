import React, { useState } from "react";

interface AccountStatementRecord {
  id: number;
  date: string;
  particular: string;
  credit: number;
  debit: number;
}

export default function AccountStatement() {
  const [searchTerm, setSearchTerm] = useState("");
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);
  const [fromDate, setFromDate] = useState("13/10/2025");
  const [toDate, setToDate] = useState("13/10/2025");

  // Mock data for account statement
  const [statementRecords] = useState<AccountStatementRecord[]>([
    {
      id: 1,
      date: "2025-01-15",
      particular: "Direct Team Bonus",
      credit: 150.00,
      debit: 0.00
    },
    {
      id: 2,
      date: "2025-01-14",
      particular: "Service Generation Income",
      credit: 250.00,
      debit: 0.00
    },
    {
      id: 3,
      date: "2025-01-13",
      particular: "Package Purchase",
      credit: 0.00,
      debit: 1000.00
    },
    {
      id: 4,
      date: "2025-01-12",
      particular: "Matching Income",
      credit: 175.00,
      debit: 0.00
    },
    {
      id: 5,
      date: "2025-01-11",
      particular: "Withdrawal Fee",
      credit: 0.00,
      debit: 15.00
    },
    {
      id: 6,
      date: "2025-01-10",
      particular: "Club Income",
      credit: 300.00,
      debit: 0.00
    },
    {
      id: 7,
      date: "2025-01-09",
      particular: "Transfer to Node Wallet",
      credit: 0.00,
      debit: 500.00
    },
    {
      id: 8,
      date: "2025-01-08",
      particular: "Reward Income",
      credit: 125.00,
      debit: 0.00
    },
    {
      id: 9,
      date: "2025-01-07",
      particular: "Fast Track Bonus",
      credit: 500.00,
      debit: 0.00
    },
    {
      id: 10,
      date: "2025-01-06",
      particular: "Mining Generation Income",
      credit: 200.00,
      debit: 0.00
    },
    {
      id: 11,
      date: "2025-01-05",
      particular: "Deposit Fund",
      credit: 2000.00,
      debit: 0.00
    },
    {
      id: 12,
      date: "2025-01-04",
      particular: "Mining Profit Sharing",
      credit: 350.00,
      debit: 0.00
    },
    {
      id: 13,
      date: "2025-01-03",
      particular: "Node Business Sharing",
      credit: 275.00,
      debit: 0.00
    },
    {
      id: 14,
      date: "2025-01-02",
      particular: "Withdrawal Processing",
      credit: 0.00,
      debit: 750.00
    },
    {
      id: 15,
      date: "2025-01-01",
      particular: "New Year Bonus",
      credit: 100.00,
      debit: 0.00
    }
  ]);

  // Filter records based on search term
  const filteredRecords = statementRecords.filter(record =>
    record.particular.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Pagination
  const totalPages = Math.ceil(filteredRecords.length / rowsPerPage);
  const startIndex = (currentPage - 1) * rowsPerPage;
  const endIndex = startIndex + rowsPerPage;
  const currentRecords = filteredRecords.slice(startIndex, endIndex);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-GB', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric'
    });
  };

  const handleFilter = () => {
    // Filter logic based on date range
    console.log("Filtering from:", fromDate, "to:", toDate);
    setCurrentPage(1);
  };

  return (
    <div className="mx-auto max-w-screen-2xl p-4 md:p-6 2xl:p-10 bg-gray-900 min-h-screen">
      {/* Breadcrumb */}
      <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <h2 className="text-title-md2 font-semibold text-white">
          A/c Statement
        </h2>
        <nav>
          <ol className="flex items-center gap-2">
            <li><a className="font-medium text-gray-300 hover:text-white" href="/">Home /</a></li>
            <li><a className="font-medium text-gray-300 hover:text-white" href="/">Financial /</a></li>
            <li className="font-medium text-orange-500">A/c Statement</li>
          </ol>
        </nav>
      </div>

      {/* Date Filter Section */}
      <div className="mb-6 bg-gray-800 rounded-xl border border-gray-700 p-6">
        <div className="flex flex-col sm:flex-row gap-4 items-center">
          <div className="flex items-center gap-4">
            <div className="relative">
              <input
                type="text"
                value={fromDate}
                onChange={(e) => setFromDate(e.target.value)}
                className="w-32 rounded-lg border-2 border-gray-600 bg-gray-700 py-3 px-4 text-white placeholder-gray-400 outline-none transition-all focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20"
                placeholder="From Date"
              />
              <svg className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
            
            <div className="relative">
              <input
                type="text"
                value={toDate}
                onChange={(e) => setToDate(e.target.value)}
                className="w-32 rounded-lg border-2 border-gray-600 bg-gray-700 py-3 px-4 text-white placeholder-gray-400 outline-none transition-all focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20"
                placeholder="To Date"
              />
              <svg className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
          </div>

          <button
            onClick={handleFilter}
            className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105"
          >
            Filter
          </button>
        </div>
      </div>

      {/* Account Statement Table */}
      <div className="bg-gray-800 rounded-xl border border-gray-700 shadow-2xl overflow-hidden">
        <div className="p-6 border-b border-gray-700">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <h3 className="text-white font-bold text-xl">A/c Statement</h3>
            <div className="relative">
              <input
                type="text"
                placeholder="Search"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full sm:w-64 rounded-lg border-2 border-gray-600 bg-gray-700 py-3 pl-10 pr-4 text-white placeholder-gray-400 outline-none transition-all focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20"
              />
              <svg className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gradient-to-r from-gray-800 to-gray-750 border-b border-gray-700">
              <tr>
                <th className="text-left py-4 px-6 font-bold text-white text-sm uppercase tracking-wider">#</th>
                <th className="text-left py-4 px-6 font-bold text-white text-sm uppercase tracking-wider">Date</th>
                <th className="text-left py-4 px-6 font-bold text-white text-sm uppercase tracking-wider">Particular</th>
                <th className="text-left py-4 px-6 font-bold text-white text-sm uppercase tracking-wider">Cr.</th>
                <th className="text-left py-4 px-6 font-bold text-white text-sm uppercase tracking-wider">Db.</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-700">
              {currentRecords.length > 0 ? (
                currentRecords.map((record, index) => (
                  <tr key={record.id} className="hover:bg-gray-700/50 transition-colors">
                    <td className="py-4 px-6 text-white font-medium">{startIndex + index + 1}</td>
                    <td className="py-4 px-6 text-gray-300">{formatDate(record.date)}</td>
                    <td className="py-4 px-6 text-white font-medium">{record.particular}</td>
                    <td className="py-4 px-6">
                      {record.credit > 0 ? (
                        <span className="text-green-400 font-bold">${record.credit.toLocaleString()}</span>
                      ) : (
                        <span className="text-gray-500">-</span>
                      )}
                    </td>
                    <td className="py-4 px-6">
                      {record.debit > 0 ? (
                        <span className="text-red-400 font-bold">${record.debit.toLocaleString()}</span>
                      ) : (
                        <span className="text-gray-500">-</span>
                      )}
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={5} className="py-12 text-center">
                    <div className="text-gray-400">
                      <svg className="mx-auto h-12 w-12 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                      <p className="text-lg font-medium">No data available in table</p>
                    </div>
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="px-6 py-4 border-t border-gray-700 flex flex-col sm:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2 text-gray-400">
            <span>Row Per Page</span>
            <input
              type="number"
              value={rowsPerPage}
              onChange={(e) => {
                setRowsPerPage(Number(e.target.value));
                setCurrentPage(1);
              }}
              className="w-16 rounded border border-gray-600 bg-gray-700 px-2 py-1 text-white text-sm"
              min="1"
              max="100"
            />
            <span>Entries</span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
              className="p-2 rounded-lg border border-gray-600 bg-gray-700 text-gray-400 hover:text-white hover:bg-gray-600 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <span className="px-3 py-2 text-white font-medium">
              {currentPage} of {totalPages}
            </span>
            <button
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
              className="p-2 rounded-lg border border-gray-600 bg-gray-700 text-gray-400 hover:text-white hover:bg-gray-600 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
