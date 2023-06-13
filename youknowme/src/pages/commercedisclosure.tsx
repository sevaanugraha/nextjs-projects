import { useTranslation } from 'react-i18next';

export default function Privacy() {
  const { t } = useTranslation();

  return (
    <>
      <div className="bg-gray-800 px-4 py-20 text-center text-4xl font-semibold text-white lg:py-24">
        Commerce Disclosure
      </div>

      <div className="flex min-h-screen flex-col">
        <div className="flex-grow py-20">
          <div className="mx-auto max-w-4xl px-8">
            <div className="space-y-6 text-lg leading-8 text-gray-600">
              <ul className="list-inside list-disc">
                <li>Legal Name: 株式会社ＡｔｏＺ　Ｅｎｇｌｉｓｈ</li>
                <li>Address: 東京都文京区根津2-20-1, Nezu 2-20-1. Bunkyō, Tokyo, Japan</li>
                <li>Phone Number: +81 70 5572 1147</li>
                <li>Email: info@youknowme.xyz</li>
                <li>Head of Operations: David Thayne</li>
                <li>
                  Exchanges & Returns Policy: We charge you for access to the product based on
                  credit plans you choose. Due to the nature of our product, we currently do not
                  offer refunds, either partial or in full. We will no longer charge you anything
                  once you choose not to use our product. We may change our pricing, pricing
                  policies, features and access restrictions at any time.
                </li>
                <li>
                  Delivery times: Once payment is done, your credits will be auto added on your user
                  dashboard. Credits will be added based on plan you choose.
                </li>
                <li>Accepted payment methods: Credit Card</li>
                <li>
                  Price: 9 USD for 100 credits, 19 USD for 1000 credits, 49 USD for 5000 Credits
                </li>
                <li>
                  Additional fees: There is no additional fees from us, credit card provider may
                  charge you service fee.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
