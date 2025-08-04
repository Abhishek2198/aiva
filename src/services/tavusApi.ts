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
In any dental emergency—like a knocked-out tooth, severe pain, or bleeding—you should contact your dentist immediately. If a tooth is knocked out, try to place it back in the socket or keep it in milk or saliva and get to the dental clinic as soon as possible. Quick action can often save the tooth.`,
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