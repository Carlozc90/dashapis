import FormApi from "./conback/FormApi";
import NewsletterSubscribe from "./sinback/NewsletterSubscribe";
import Image from "next/image";

const Mailchimps = () => {
  return (
    <>
      <div className="Mail__img">
        <Image
          src={"/assets/mailchimp.png"}
          width={150}
          height={150}
          alt="imagen mainchimp"
        />
      </div>

      <div className="MailContainer">
        <div className="Mail__Cback">
          <FormApi />
        </div>
        <div className="Mail__Sback Info__Suscribe">
          <NewsletterSubscribe />
        </div>
      </div>
    </>
  );
};

export default Mailchimps;
