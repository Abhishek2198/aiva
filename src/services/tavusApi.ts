const TAVUS_API_BASE = 'https://tavusapi.com/v2';
const TAVUS_API_KEY = '975b0fa54ea746e1b4cca4ff3f41f384';


const headers = {
  'Content-Type': 'application/json',
  'x-api-key': TAVUS_API_KEY,
};

export const createTavusConversation = async () => {
  try {
    const conversationData = {
      replica_id: 'rd3ba0f30551',
      conversation_name: 'DentalCare Pro Avatar',
      persona_id: 'p53c1f49184e',
      conversational_context: `1. How often should I visit the dentist?
It’s recommended that you visit the dentist every six months. These regular check-ups help catch any early signs of decay, gum issues, or other oral problems before they become serious. Routine cleanings also help keep your teeth and gums healthy in the long term.

2. What causes tooth sensitivity?
Tooth sensitivity can happen when the protective enamel wears down or when the gums recede, exposing the inner layer of your teeth. It can also be triggered by cavities, cracked teeth, or acidic foods. If you’re experiencing sensitivity, it’s best to consult your dentist to find the right solution for you.

3. Is teeth whitening safe?
Yes, professional teeth whitening is generally very safe when performed by a licensed dentist. Over-the-counter kits may work, but they can sometimes cause irritation or uneven results. Getting your teeth whitened at a dental clinic ensures both safety and effectiveness.

4. What’s the best way to prevent cavities?
The best way to prevent cavities is to brush your teeth twice a day using fluoride toothpaste, floss daily, limit sugary snacks and drinks, and schedule regular dental cleanings. Following this routine will help protect your enamel and prevent decay.

5. Are electric toothbrushes better than manual ones?
Electric toothbrushes are often more effective at removing plaque and reducing gum disease. They can also be easier to use, especially for people with limited mobility. While manual toothbrushes can also clean well if used properly, electric ones often provide more consistent results.

6. What are the options for replacing missing teeth?
There are several ways to replace missing teeth. Dental implants are a permanent solution that looks and feels natural. Bridges can fill gaps using neighboring teeth for support. Dentures are removable and suited for multiple missing teeth. Your dentist can help you decide which option is best for your needs and lifestyle.

7. Why do my gums bleed when I brush or floss?
Bleeding gums are often an early sign of gum disease, also known as gingivitis. It can also happen if you’re brushing too hard or not flossing regularly. If your gums continue to bleed, it’s important to visit a dentist for a thorough evaluation and appropriate treatment.

8. How can I fix bad breath?
Bad breath, or halitosis, is usually caused by poor oral hygiene, dry mouth, or underlying dental issues. Brushing twice a day, cleaning your tongue, flossing daily, and staying hydrated can help. If bad breath persists, it may indicate a more serious problem, and a dental check-up is recommended.

9. At what age should my child start seeing a dentist?
Children should have their first dental visit by their first birthday or within six months after their first tooth comes in. Early dental visits help detect any problems, build good habits, and make your child comfortable with dental care from a young age.

10. What should I do in a dental emergency?
In any dental emergency—like a knocked-out tooth, severe pain, or bleeding—you should contact your dentist immediately. If a tooth is knocked out, try to place it back in the socket or keep it in milk or saliva and get to the dental clinic as soon as possible. Quick action can often save the tooth.

11.Is teeth removal procedure is painful ?
The teeth removal (extraction) procedure is generally not painful during the process because dentists use local anesthesia to numb the area.
 During the Procedure:
You will feel pressure, pushing, or wiggling, but no sharp pain.

If you do feel pain, let your dentist know—they can administer more anesthesia.

After the Procedure (Once Numbness Wears Off):
Mild to moderate pain or discomfort is normal for the first 24–72 hours.

Pain is usually manageable with prescribed or over-the-counter painkillers.

Swelling, soreness, or slight bleeding may occur temporarily.

12. How long it will take to heal tooth wounds?
 1–3 Days:
Initial blood clot forms in the socket.

Swelling and discomfort are common.

Rest and soft foods recommended.

3–7 Days:
Pain and swelling reduce significantly.

Soft tissues start healing.

Most people can return to normal eating (avoiding hard/crunchy foods).


1–2 Weeks:
Gum tissue closes over the wound.

Stitches (if used) are removed or dissolve on their own.

3–4 Weeks:
Soft tissue mostly healed.

You may not feel anything abnormal at the site.

1–3 Months:
Bone heals and fills in the socket fully (takes longer, especially for molars and wisdom teeth)


13. Is stitches are necessary in tooth removal surgery?
When Stitches ARE Needed:
Surgical extractions (like impacted wisdom teeth removal).

When the dentist cuts the gum to remove the tooth.

To help stop bleeding or close a large wound.

If the gum needs to be repositioned or reshaped.

To promote faster healing and prevent infection.


Dissolvable stitches (common): They melt away in 7–14 days.

Non-dissolvable stitches: Dentist will remove them in about 7–10 days if used.

14. What will be the precautions post this surgery?
Use ice packs on the cheek for swelling.

Stick to soft, cold foods initially (like yogurt, smoothies, or soups).

Avoid smoking, spitting, or using straws (especially after wisdom tooth extraction) to prevent dry socket—a painful condition.

15. Do you deal with tooth removal or tooth implantation surgeries?
Absolutely! We offer both tooth removal (extractions) and tooth implantation procedures at our clinic.

Tooth removal is typically recommended when a tooth is severely damaged, decayed, or causing crowding or infection. We ensure it’s done gently and safely, with proper anesthesia and post-care support.

Tooth implantation is a long-term solution for replacing missing teeth. It's a surgical procedure where we place a titanium post into the jawbone, which acts as a root, followed by a crown that looks and functions like a natural tooth.

Both procedures are handled by our experienced dental surgeons using the latest techniques and equipment to ensure your comfort and successful results. If you’d like, I can help schedule a consultation to evaluate which option is best for your case.

16.I m sensitive of anaesthesia is there any alternate of this ?
Thank you for sharing that—your comfort and safety are very important to us. Yes, if you have a sensitivity or allergy to certain anesthetics, we absolutely have alternatives.

First, we’ll begin with a detailed medical history and possibly an allergy test if needed, to identify which specific agents may be causing your sensitivity.

Depending on your case, some alternatives and solutions include:

Using a different type of local anesthetic:
Sometimes, patients react to one kind but not others. We have multiple options available.

Sedation Dentistry:
We can use mild oral sedatives or nitrous oxide (laughing gas), which reduce discomfort and anxiety without using traditional injectable anesthetics.

Topical anesthetics only (for minor procedures):
If the procedure is simple, a strong numbing gel may be sufficient, avoiding injections entirely.

Referral to an allergy specialist:
In very rare cases, we may coordinate with a medical professional to ensure complete safety before any treatment.

We’ll take every precaution to tailor the treatment to your specific needs. You're not alone in this—many patients have similar concerns, and we’re here to help make your experience as comfortable as possible. Would you like to book a pre-procedure evaluation so we can plan the safest approach for you?

17. How can i book my appointment ?
Booking your appointment is quick and easy! You can choose any of the following options:

Call Us Directly:
Just give us a call at [+91-9473834742], and our front desk team will help you find the earliest available slot.

WhatsApp Booking:
Message us on [+91-9473834742] with your name and preferred date/time, and we’ll confirm your appointment right away.

Online Booking:
Visit our website at [www.dentalpro.com] and use the “Book Appointment” button. It only takes a minute.

Walk-In Appointment:
You’re also welcome to walk into the clinic during our working hours, and we’ll do our best to accommodate you.

Would you like me to help you book a slot now or share the available timings with you?

18. can i book appointment for tomorrow 2pm.
hank you! Let me check the schedule for you.

 Yes, we do have an available slot tomorrow at 2:00 PM.

I’ve tentatively reserved it for you.

Looking forward to seeing you tomorrow at 2 PM! 

We recommend arriving 10–15 minutes early for check-in and paperwork. If you have any medical records or previous X-rays, feel free to bring them along.

19. What is your clinic mobile number ?
Our clinic mobile number is [+91-9473834742]. You can reach us there for any questions, appointment bookings, or assistance you need.

20. What is your clinic whatsapp number?
Our clinic WhatsApp number is [+91-9473834742]. You can reach us there for any questions, appointment bookings, or assistance you need.

21. What is your website link?
Our website link is www.dentalpro.com. You can find more information about our services
`,
      properties: {
        language: 'multilingual',
        enable_closed_captions: true,
      },
    };

    const response = await fetch(`${TAVUS_API_BASE}/conversations`, {
      method: 'POST',
      headers,
      body: JSON.stringify(conversationData),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || `HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error creating Tavus conversation:', error);
    throw error;
  }
};

export const getConversationStatus = async (conversationId: string) => {
  try {
    const response = await fetch(`${TAVUS_API_BASE}/conversations/${conversationId}`, {
      headers,
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error getting conversation status:', error);
    throw error;
  }
};

export const endConversation = async (conversationId: string) => {
  try {
    const response = await fetch(`${TAVUS_API_BASE}/conversations/${conversationId}/end`, {
      method: 'POST',
      headers,
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    // Tavus API may return empty response on successful end
    const text = await response.text();
    if (text) {
      return JSON.parse(text);
    }
    return { success: true };
  } catch (error) {
    console.error('Error ending conversation:', error);
    throw error;
  }
};