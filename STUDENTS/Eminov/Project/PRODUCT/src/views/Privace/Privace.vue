<template>
  <div>
    <HomePageBanner 
      :name="'privace policy'"
    />
    <div class="privace">
      <div class="container">
        <div class="row">
          <ol>
            <li class="privace_point"><u>Definitions and terms</u>
              <ol class="sub_points ml-2">
                <li>Website – any of the DNS Company's websites that contains information about the products offered by the Company, marketing promotions and other information on the Internet.</li>
                <li>The Client is an individual using the Company's website.</li>
                <li>Personal data - information related to a specific Client specified in clause 3.1 of this Regulation.</li>
                <li>Personal data processing – any operations performed with or without the use of automation tools with personal data, including collection, recording, systematization, accumulation, storage, clarification (updating, modification), extraction, use, transfer (distribution, provision, access), depersonalization, blocking, deletion, destruction of personal data data.</li>
                <li>Cookies are fragments of data sent by the web server to the browser when the Client visits the site. The Company automatically receives some types of information obtained during the interaction of users with the Site. We are talking about technologies and services, such as web protocols, cookies, web tags, as well as applications and tools of these third parties. Cookies are a piece of data that is automatically located on your computer's hard drive every time you visit a website. Thus, a cookie is a unique browser identifier for a website. Cookies make it possible to store information on the server and make it easier to navigate the web space, as well as allow you to analyze the site, evaluate results and target behavioral advertising. Most web browsers allow the use of cookies, but you can change the settings to refuse cookies or track the way they are sent. At the same time, some resources may not work correctly if cookies are prohibited in the browser.</li>
              </ol>
            </li>
            <li class="privace_point mt-5"><u>Objectives and principles of the Privacy Policy and personal data collections</u>
              <ol class="sub_points ml-2">
                <li>The Privacy Policy applies to any information specified in section 3 that the Company may receive about the Client during the use of the site, programs and products of the site.</li>
                <li>The Client provides his personal data for the purpose of:
                  <ol class="ml-2">
                    <li>Creating an account;</li>
                    <li>Providing technical support related to the use of the site;</li>
                    <li>Participation in promotions, surveys;</li>
                    <li>Processing of orders, notification of the status of orders, processing and receipt of payments;</li>
                    <li>Receiving news, information about products, events, promotions or services;</li>
                    <li>Use of other services available on the site, including, but not limited to, a forum, personal blogs, a service for exchanging personal messages between registered participants, personalized comments and reviews.</li>
                  </ol>
                </li>
                <li>Ensuring the reliability of information storage and transparency of the purposes of personal data collection. Personal data of Clients is collected, stored, processed, used, transferred and deleted (destroyed) in accordance with the legislation of the Russian Federation, including Federal Law No. 152-FZ "On Personal Data" on 27.07.2006, and this Privacy Policy.</li>
              </ol>
            </li>
            <li class="privace_point mt-5"><u>Information to be processed</u>
              <ol class="sub_points ml-2">
                <li>The personal data authorized for processing under this Privacy Policy is provided by the Client by filling out a registration form on the Company's website and includes the following information:
                  <ol class="ml-2">
                    <li>Client's full name;</li>
                    <li>Customer's contact phone number;</li>
                    <li>Email address (e-mail);</li>
                    <li>Product delivery address;</li>
                    <li>Order history.</li>
                  </ol>
                </li>
                <li>The company also receives data that is automatically transmitted during the viewing process when visiting the site, including:
                  <ol class="ml-2">
                    <li>IP address;</li>
                    <li>Information from cookies;</li>
                    <li>Information about the browser (or other program that provides access to the display of ads);</li>
                    <li>Access time.</li>
                  </ol>
                </li>
              </ol>
            </li>
            <li class="privace_point mt-5"><u>Processing and use of personal data</u>
              <ol class="sub_points ml-2">
                <li>The processing of the Client's personal data is carried out without time limit, in any legal way, including in personal data information systems using automation tools or without the use of such tools.</li>
                <li>By agreeing to this Privacy Policy, the Client provides the Company with his consent to the processing of the personal data specified in Section 3 in all the ways specified in this Policy, as well as the transfer of these data to the Company's partners for the purposes of fulfilling the obligations assumed.</li>
                <li>The Company does not have the right to transfer information about the Client to unaffiliated persons or persons not connected with the Company by contractual relations.</li>
                <li>The transfer of information to affiliated persons and persons who are connected with the Company by contractual relations (courier services, postal organizations, etc.) is carried out for the execution of the Client's order, as well as for the possibility of informing the Client about ongoing promotions, services provided, events held.</li>
                <li>Affiliated persons and persons connected with the Company by contractual relations assume obligations to ensure the confidentiality of information and guarantee its protection, and also undertake to use the information received exclusively for the purposes of performing these actions or providing services.</li>
                <li>The Company takes all necessary measures to protect the Client's personal data from unauthorized access, modification, disclosure or destruction.</li>
              </ol>
            </li>
            <li class="privace_point mt-5"><u>Rights and obligations of the Client</u>
              <ol class="sub_points ml-2">
                <li>The Client undertakes not to disclose to any third parties the login and password used by him for identification on the Company's website.</li>
                <li>The Client undertakes to observe due diligence when storing the password, as well as when entering it.</li>
                <li>The Client has the right to change his personal data, as well as to request the deletion of personal data from the Company.</li>
              </ol>
            </li>
            <li class="privace_point mt-5"><u>Additional conditions</u>
              <ol class="sub_points ml-2">
                <li>By agreeing to this Privacy Policy, the Client gives his consent to receive information about the status of orders, account and other technical notifications, as well as advertising notifications, including current marketing promotions and current offers of the Company, by various means, including SMS and email, but not limited to them. The Client may at any time refuse to receive such information by changing the account details on the Company's website.</li>
                <li>The validity period of the consent is determined by the achievement of the processing goals or the withdrawal of consent by the consumer.</li>
                <li>The Company is liable to the client in cases stipulated by the current legislation.</li>
                <li>The Company is exempt from liability in cases where information about the Client:
                  <ol class="ml-2">
                    <li>became public domain before its loss or disclosure;</li>
                    <li>was received from a third party prior to its receipt by the Company;</li>
                    <li>was disclosed with the consent of the Client.</li>
                  </ol>
                </li>
                <li>The Company has the right to make changes to the privacy policy unilaterally. The changes come into force from the moment they are published on the Company's website.</li>
              </ol>
            </li>
          </ol>
        </div>
      </div>
    </div> 
  </div>
</template>

<script>
import HomePageBanner from '@components/pages/UI/HomePageBanner.vue';

export default {
    name: 'PrivacePolicy',
    components: { HomePageBanner },
};
</script>

<style scoped>
  .privace {
    margin: 50px 0 25px 0;
    color: #333
  }

  .privace_point {
    font-size: 15px;
    text-align: justify;
  }

  ol {
   list-style: none;
   counter-reset: li;
  }

  li:before {
    counter-increment: li;
    content: counters(li, ".") ". ";
  }

  .sub_points {
    margin-top: 10px;
  }
</style>