'use client';

import Header from '../components/Header';
import Footer from '../components/Footer';
import Breadcrumb from '../components/Breadcrumb';
import CallToAction from '../components/CallToAction';

export default function TermsAndConditions() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="relative h-96 bg-gradient-to-r from-primary/90 to-secondary/90 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-5xl font-bold">Terms & Conditions</h1>
        </div>
      </section>

      {/* Breadcrumb */}
      <section className="py-8 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb items={[{ label: 'Terms & Conditions' }]} />
        </div>
      </section>

      {/* Introduction */}
      <section className="py-10 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-4" style={{ color: '#48009f' }}>
            Euroasia Scientific India Pvt. Ltd.
          </h2>
          <p className="text-lg text-neutral-700 leading-relaxed">
            Please review our official Terms & Conditions below.
          </p>
        </div>
      </section>

      {/* Terms Content */}
      <section className="py-12 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-xl shadow-large p-6 sm:p-8 border border-neutral-200 space-y-8">
            <div>
              <h3 className="text-xl font-semibold text-neutral-900 mb-2">1. Area of Application</h3>
              <p className="text-neutral-700 leading-relaxed">
                All inspection orders accepted by &quot;EuroAsia Scientific India Pvt. Ltd.&quot; or
                its subsidiaries or affiliates (collectively, &quot;ESI&quot;) shall be governed by
                these General Terms and Conditions for Inspection Services (the &quot;Terms and
                Conditions&quot;). These apply to all inspections performed, including routine,
                re-inspection, and surveillance inspections.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-neutral-900 mb-2">2. Acceptance of Orders</h3>
              <p className="text-neutral-700 leading-relaxed">
                Acceptance of Orders are considered accepted by ESI either when: (a) ESI commences
                execution of the inspection assignment, or (b) ESI provides written confirmation of
                the order. Verbal instructions must be confirmed in writing. Any deviations from
                these Terms and Conditions must be agreed in writing by the Chief Executive Officer
                of ES.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-neutral-900 mb-2">3. Scope of Inspection</h3>
              <p className="text-neutral-700 leading-relaxed">
                Inspections are performed based on standards, guidelines, checklists, and protocols
                agreed upon with the client. The client shall provide all necessary information
                prior to inspection, including specifications, packing list, approved samples, and
                any special requirements.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-neutral-900 mb-2">
                4. Service Fees / Man-day rate
              </h3>
              <div className="space-y-3 text-neutral-700 leading-relaxed">
                <p>
                  4.1. ESI shall invoice to Client on per man-day basis (here Man-day means one ESI
                  Associate serving for one working day) and / or fixed service fees, including
                  other charges if any.
                </p>
                <p>
                  4.2. The agreed man-day rate / service fee(s) for mentioned service(s) is as per
                  Annexure I for inspection, Annexure II for Lab testing, Annexure III for Audit
                  and Annexure IV for Certification.
                </p>
                <p>
                  4.3. Additional Sample inspection / Sample Sealing &amp; Sending by Courier
                  during Inspection, will incur additional handling charges. ESI may accept such
                  special request only after they are subjected to workload validation. Requests
                  meeting internal validation norms will be accepted.
                </p>
                <p>
                  4.4. Service will be performed on weekdays and in General working hours only,
                  except as agreed in unavoidable circumstances with premium charges.
                </p>
                <p>
                  4.5. Conducting inspection on weekly off / Sunday or Listed Holidays: In case if
                  it is any exceptional / unavoidable circumstances, we may accept &amp; conduct
                  service on Sundays or Holidays / weekly off, it will incur premium charges from
                  its Standard price.
                </p>
                <p>
                  4.6. Compensation for Extra Working Hours: The Inspection should be offered in
                  the morning by 10 am. In exceptional cases, if mutually agreed in advance or
                  inspection is offered late, we may accommodate the extra working time request
                  with Premium Fees as mentioned in Annexure I in addition to the agreed fees for
                  particular service. In any case the inspection shall be offered before 2 pm, so
                  it can be completed within extra 4 hours from normal working hours end (10
                  am-7p).
                </p>
                <p>
                  4.7. Express booking request: Any express booking request, less than 3 working
                  days prior to required service date, will incur Express booking charges as
                  mentioned in Annexure I agreed service fees.
                </p>
                <p>
                  4.8. Any change in Client instruction or changes found in initial details
                  provided by Client to ESI prior to quotation may lead to increase in workload /
                  fees. The Client will be informed in any increase in such workload / fees, in
                  advance wherever possible. Additional fees if mutually agreed, shall be charged
                  for service that are not include in the proposal and for work required.
                </p>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-neutral-900 mb-2">5. Reporting Delivery</h3>
              <div className="space-y-3 text-neutral-700 leading-relaxed">
                <p>
                  5.1. On completion of requested service, ESI will forward the
                  computer-generated report in secured PDF format on next working day normally.
                  Exception is applicable for special request.
                </p>
                <p>
                  5.2. Express Report delivery (if required): This involves additional efforts of
                  some of our associates, and this will be charged additional express delivery
                  charge as mentioned in Annexure I above the agreed service fees. Express includes
                  same day report delivery requirements or sending it on Sunday or National
                  holidays.
                </p>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-neutral-900 mb-2">6. Obligation to Client</h3>
              <div className="space-y-3 text-neutral-700 leading-relaxed">
                <p>
                  6.1. Client to book respective order through e-mail at least 3 working days in
                  advance to schedule the requested service.
                </p>
                <p>
                  6.2. ESI shall allocate inspector or auditor after official confirmation to
                  client or they might appoint internally at any time on those dates, on behalf of
                  client.
                </p>
                <p>
                  6.3. Any aborted services / No show will be charged equivalent to the service
                  fees to the Client.
                </p>
                <p>
                  6.4. If an inspection is cancelled less than 24 hours before the confirmed date:
                  100% of the inspection fee will be charged.
                </p>
                <p>
                  6.5. At all times, be responsible for the complete care and control of the
                  locations where the services are to be performed and provide a safe and secure
                  environment.
                </p>
                <p>
                  6.6. Inform ESI in advance of all known hazards and dangers, actual and potential,
                  related to any order, including the risk of radiation and all environmental
                  pollution or poisons.
                </p>
                <p>
                  6.7. To inform manufacturer to provide proper inspection table with sufficient
                  light, manpower, safe working condition at their own cost during the execution of
                  service.
                </p>
                <p>
                  6.8. To inform manufacturer and arrange for calibrated equipment(s) to perform
                  the inspection activity such as weighing balance, metal detector machine, perch
                  machine for fabric inspection, color matching cabinet, pantone book, appropriate
                  calipers etc.
                </p>
                <p>
                  6.9. The client is not entitled to request a change of test results or of any
                  other parts of the inspection / audit report, except for any obvious mistakes.
                </p>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-neutral-900 mb-2">7.0 Confidentiality</h3>
              <div className="space-y-3 text-neutral-700 leading-relaxed">
                <p>
                  7.1 ESI is responsible, through legally enforceable commitments, for the
                  management of all information obtained or created during the performance of
                  inspection activities (e.g. technical data, product design, manufacturing process
                  specifications, test results, and inspection reports). The ESI informs the
                  customer in advance, of the information it intends to place in the public domain,
                  as and when applicable. Except for information that the customer makes publicly
                  available, or when agreed between ESI and the customer (e.g. for the purpose of
                  responding to complaints), all other information is considered proprietary
                  information and are regarded as confidential. If the customer desires to impose
                  legally enforceable commitments while undertaking Inspection/Audit/Testing work
                  for them, the same is done in the form of contract / agreement / work order
                  between ESI and its customer.
                </p>
                <p>
                  7.2. When ESI is required by law or authorized by contractual arrangements by the
                  customers to release confidential information, the customer or individual
                  concerned, unless prohibited by law, is notified of the information provided.
                </p>
                <p>
                  7.3. Information about the customer obtained from sources other than the customer
                  (e.g. complainant, regulators) is treated as confidential by ESI and not disclosed
                  to the concerned customer. The provider (source) of this information is
                  confidential to ESI and is never shared with the customer, unless agreed by the
                  source.
                </p>
                <p>
                  7.4. Personnel, including any committee members, contractors, personnel of
                  external bodies, or individuals acting on the Inspection&apos;s behalf keep
                  confidential all information obtained or created during the performance of
                  inspection activities, except as required by law. In order to ensure the
                  protection of customers&apos; confidential information and proprietary rights,
                  ESI has the policy that any document generated in the course of carrying out any
                  activity related to inspection is treated as confidential document.
                </p>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-neutral-900 mb-2">
                8.0 Terms of payment and Invoicing
              </h3>
              <div className="space-y-3 text-neutral-700 leading-relaxed">
                <p>
                  8.1. Invoice for the services performed will be sent on fortnightly basis and
                  payment is due within seven (7) days of Invoice date. All invoices will be sent
                  in form of soft copy which will be digitally signed.
                </p>
                <p>
                  8.2. For any late payments an extra charge 2% of the total due amount will be
                  charged for every month of late payment.
                </p>
                <p>
                  8.3. When transferring the money with its bank, the Client agrees to pay for
                  their own bank charges (Outbound and intermediary bank fees).
                </p>
                <p>
                  8.4. Payment of the Services fees for ESI to be done via online / internet bank
                  transfers digitally (via NEFT, RTGS etc.), Physical cheques are not preferred to
                  make the payment. Services fees are labelled in INR (Indian Rupees) or US Dollar.
                </p>
                <p>
                  8.5. In case if invoice required to raise to other than client (example Exporter,
                  buying agent, manufacturer, supplier etc., here after called third party), Client
                  shall notify the ESI prior to commencing of service so that advance payment could
                  be collected from that third party before proceeding with requested service.
                  Further on request from Client if invoice for service has performed and that
                  third party not paid the service fees within seven days from invoicing then
                  Client is liable to pay full-service fees for particular service to ESI. The
                  service fees applicable for that third party will be as per Annexure I.
                </p>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-neutral-900 mb-2">
                9.0 Liability and Indemnity
              </h3>
              <div className="space-y-3 text-neutral-700 leading-relaxed">
                <p>
                  9.1. ESI is neither an insurer nor a guarantor and disclaims all liability in
                  such capacity, the responsibility of manufacturing quality goods is the sole
                  responsibility of the manufacturer. ESI liability is limited to inspecting the
                  goods based on the specific requirements of the requester, and as made available
                  by the manufacturer/ supplier at the time of the inspection and report the
                  findings to the requester. Client shall obtain appropriate insurance who are
                  looking for guarantee against loss or damage of goods.
                </p>
                <p>
                  9.2. The inspection result reflects as on the day and time of the inspection and
                  as such ESI cannot be held responsible for any alteration, modification in the
                  goods or for any damage to the goods in transit.
                </p>
                <p>
                  9.3. ESI undertakes to exercise due care and skill in the performance of its
                  services and accepts responsibility only where such skill and care is not
                  exercised. The liability of the ESI in respect of any claims for loss, damage or
                  expense of whatsoever nature and howsoever arising in respect of any breach of
                  contract and/or any failure to exercise due skill and care and/or gross
                  negligence by the ESI shall in no circumstances exceed a total aggregate sum equal
                  to the amount of the fee payable in respect of the specific service or part of
                  the service, provided the same is discussed and agreed the gross negligence. ESI
                  shall have no liability in respect of any claims for indirect or consequential
                  loss including loss of profit and/or loss of future business and/or loss of
                  production and/or cancellation of contracts entered into by the Client. Where the
                  fee payable relates to a number of services and a claim arises in respect of one
                  of those services the fee shall be apportioned based on service provided and shall
                  not be held for all services. Where the fee payable relates to a long duration
                  service and a claim arises to a part of that service, the fee shall be apportioned
                  based on the part of the service provided and shall not be held for the entire
                  service.
                </p>
                <p>
                  9.4. ESI is committed to execute the requested services on mutually agreed dates
                  by Inspection provider, however in any circumstances if any service is not
                  executed on requested dates, ESI shall not be held liable for any claims or
                  losses. We request Inspection providers / manufacturers / suppliers to plan and
                  offer the inspections well in advance to mitigate any such unavoidable delay.
                </p>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-neutral-900 mb-2">10.0 Force Majeure</h3>
              <p className="text-neutral-700 leading-relaxed">
                ESI shall not be liable for delays or non-performance due to circumstances beyond
                its control, including natural disasters, strikes, government restrictions, or
                transportation disruptions.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-neutral-900 mb-2">
                11.0 Governing Law and Dispute Resolution
              </h3>
              <p className="text-neutral-700 leading-relaxed">
                Unless specifically agreed otherwise, all dispute arising out of, or in connection
                with these General Terms and Conditions or the contract shall be governed by the law
                of India and courts at New Delhi shall have the jurisdiction over the same. The
                said arbitration shall be governed by the rules of Arbitration and conciliation act
                or any amendment thereof by one arbitrator appointed by ESI. The arbitration shall
                take place in New Delhi and be conducted in the English language only. The expense
                of arbitration shall be borne by both parties equally.
              </p>
            </div>
          </div>
        </div>
      </section>

      <CallToAction />
      <Footer />
    </div>
  );
}

