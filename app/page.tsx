export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
      <div className="relative py-3 sm:max-w-xl sm:mx-auto">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-light-blue-500 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
        <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
          <div className="max-w-md mx-auto">
            <h1 className="text-2xl font-semibold mb-6">
              Delete Your Shapshooter Account
            </h1>

            <p className="text-gray-600 mb-6">
              We arre sorry to see you go. Here is how you can delete your account and associated data:
            </p>

            <div className="space-y-6">
              <div className="bg-gray-50 p-4 rounded-lg">
                <h2 className="text-xl font-medium mb-2">Steps to Delete Your Account:</h2>
                <ol className="list-decimal list-inside space-y-2">
                  <li>Open the Shapshooter app on your device</li>
                  <li>Go to the Account Settings or Profile section</li>
                  <li>Look for an option like Delete Account or Close Account</li>
                  <li>Follow the prompts to confirm your decision</li>
                  <li>You may need to re-authenticate for security purposes</li>
                  <li>Confirm the final deletion request</li>
                </ol>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <h2 className="text-xl font-medium mb-2">Data Deletion Information:</h2>
                <p>Upon account deletion:</p>
                <ul className="list-disc list-inside space-y-2">
                  <li>Your account and authentication data will be permanently deleted from our systems</li>
                  <li>Personal information associated with your account will be removed</li>
                  <li>Your user-generated content will be anonymized or deleted according to our data retention policy</li>
                  <li>Certain data may be retained for legal compliance purposes for a limited period</li>
                </ul>
              </div>
            </div>

            <p className="mt-6 text-gray-600">
              If you have any issues deleting your account or questions about the process, please contact our support team at kram18.mg@gmail.com.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}