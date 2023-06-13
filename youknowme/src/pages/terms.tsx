// import Header from '@/old_components/Header';
// import Footer from '@/old_components/Footer';

import { useTranslation } from 'react-i18next';

export default function Terms() {
  const { t } = useTranslation();

  return (
    <>
      <div className="lg:py-24 px-4 py-20 text-4xl font-semibold text-center text-white bg-gray-800">
        {t('Terms')}
      </div>

      <div className="flex flex-col min-h-screen">
        <div className="flex-grow py-20">
          <div className="max-w-4xl px-8 mx-auto">
            <h3>{t('BY VISITING YouKnowMe, YOU ARE CONSENTING TO OUR TERMS AND CONDITIONS.')}</h3>

            <div className="mt-10 space-y-6 text-lg leading-8 text-gray-600">
              <h3 className="font-semibold text-gray-800">{t(`OVERVIEW`)}</h3>
              <p>
                {t(
                  `The terms “we,” “us,” and “our” refer to YouKnowMe. The term the “Site” refers to YouKnowMe. The terms “user,” “you,” and “your” refer to site visitors, customers, and any other users of the site.`
                )}
              </p>
              <p>
                {t(
                  `The YouKnowMe website is a platform providing informational content, powered by chatGPT.`
                )}
              </p>
              <p>
                {t(
                  `Use of YouKnowMe, including all materials presented herein and all online services provided by YouKnowMe, is subject to the following Terms and Conditions. These Terms and Conditions apply to all site visitors, customers, and all other users of the site. By using the Site or Service, you agree to these Terms and Conditions, without modification, and acknowledge reading them.`
                )}
              </p>
              <h3 className="font-semibold text-gray-800">{t(`USE OF THE SITE AND SERVICE`)}</h3>
              <p>
                {t(`To access or use the Site, you must be 18 years of age or older and have the requisite power and authority to enter into these Terms and Conditions. Children under the age of 18 are prohibited from using the Site. Information provided on the Site and in the Service related to informational content, products, and other information are subject to change. YouKnowMe makes no representation or warranty that the information provided, regardless of its source (the “Content”), is accurate, complete, reliable, current, or error-free. YouKnowMe disclaims all liability for any inaccuracy, error, or incompleteness in the Content.`)}
              </p>

              <h3 className="font-semibold text-gray-800">{t(`ACCOUNT CREATION`)}</h3>

              <p>
                {t(`In order to use the Service, you may be required to provide information about yourself including your name, email address, username and password, and other personal information. You agree that any registration information you give to YouKnowMe will always be accurate, correct, and up to date. You must not impersonate someone else or provide account information or an email address other than your own. Your account must not be used for any illegal or unauthorized purpose. You must not, in the use of the Service, violate any laws in your jurisdiction.`)}
              </p>
              <h3 className="font-semibold text-gray-800">{t(`LAWFUL PURPOSES`)}</h3>
              <p>
                {t(`You may use the Site and Service for lawful purposes only. You agree to be financially responsible for all purchases made by you or someone acting on your behalf through the Site. You agree to use the Site and to purchase services or products through the Site for legitimate purposes only. You shall not post or transmit through the Site any material which violates or infringes the rights of others, or which is threatening, abusive, defamatory, libelous, invasive of privacy or publicity rights, vulgar, obscene, profane, or otherwise objectionable, contains injurious formulas, recipes, or instructions, which encourages conduct that would constitute a criminal offense, give rise to civil liability, or otherwise violate any law.`)}
              </p>
              <h3 className="font-semibold text-gray-800">{t(`REFUSAL OF SERVICE`)}</h3>
              <p>
                {t(`The Services are offered subject to our acceptance of your order or requests. We reserve the right to refuse service to any order, person or entity, without the obligation to assign reason for doing so. No order is deemed accepted by us until payment has been processed. We may at any time change or discontinue any aspect or feature of the Site or Service, subject to us fulfilling our previous responsibilities to you based on acceptance of your payment.`)}
              </p>
              <h3 className="font-semibold text-gray-800">{t(`ORDER CONFIRMATION`)}</h3>
              <p>
                {t(`We will email you to confirm the placement of your order and with details concerning product delivery. In the event that there is an error in this email confirmation, it is your responsibility to inform us as soon as possible.`)}
              </p>

              <h3 className="font-semibold text-gray-800">
                {t(`CANCELLATIONS, REFUNDS & RETURNS`)}
              </h3>
              <p>
                {t(
                  `Due to the nature of digital goods, we do not offer refunds under any circumstances.`
                )}
              </p>
              <h3 className="font-semibold text-gray-800">{t(`PRODUCT DESCRIPTION`)}</h3>
              <p>
                {t(`We endeavor to describe and display the Service as accurately as possible. While we try to be as clear as possible in explaining the Service, please do not accept that the Site is entirely accurate, current, or error-free. From time to time we may correct errors in pricing and descriptions. We reserve the right to refuse or cancel any order with an incorrect price listing.`)}
              </p>
              <h3 className="font-semibold text-gray-800">
                {t(`MATERIAL YOU SUBMIT TO THE SITE`)}
              </h3>
              <p>
                {t(`You shall not upload, post, or otherwise make available on the Site any artwork, photos, or other materials (collectively “Materials”) protected by copyright, trademark, or other proprietary rights without the express written permission of the owner of the copyright, trademark, or other proprietary rights, and the burden of determining that any Materials are not so protected rests entirely with you. You shall be liable for any damage resulting from any infringement of copyrights, trademarks, or other proprietary rights, or any other harm resulting from such a submission. For all Materials submitted by you to the Site, you automatically represent or warrant that you have the authority to use and distribute the Materials, and that the use or display of the Materials will not violate any laws, rules, regulations, or rights of third parties.`)}
              </p>
              <h3 className="font-semibold text-gray-800">
                {t(`INTELLECTUAL PROPERTY RIGHTS TO YOUR MATERIALS`)}
              </h3>
              <p>
                {t(`We claim no intellectual property rights over the material you supply to YouKnowMe. You retain copyright and any other rights you may rightfully hold in any content that you submit through the Site or Service. Content you submit to YouKnowMe remains yours to the extent that you have any legal claims therein. You agree to hold YouKnowMe harmless from and against all claims, liabilities, and expenses arising out of any potential or actual copyright or trademark misappropriation or infringement claimed against you. By posting material on the Site, you grant us a worldwide, non-exclusive, irrevocable license to use the material for promotional, business development, and marketing purposes.`)}
              </p>
              <h3 className="font-semibold text-gray-800">{t(`OUR INTELLECTUAL PROPERTY`)}</h3>
              <p>
                {t(`The Site and Service contain intellectual property owned by YouKnowMe, including trademarks, copyrights, proprietary information, and other intellectual property. You may not modify, publish, transmit, participate in the transfer or sale of, create derivative works from, distribute, display, reproduce or perform, or in any way exploit in any format whatsoever any of the Site or Service Content or intellectual property, in whole or in part, without our prior written consent. We reserve the right to immediately remove you from the Service, without refund, if you are caught violating this intellectual property policy.`)}
              </p>
              <h3 className="font-semibold text-gray-800">{t(`CHANGED TERMS`)}</h3>
              <p>
                {t(`We may at any time amend these Terms and Conditions. Such amendments are effective immediately upon notice to you by us posting the new Terms and Conditions on this Site. Any use of the Site or Service by you after being notified means you accept these amendments. We reserve the right to update any portion of our Site and Service, including these Terms and Conditions, at any time.`)}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
