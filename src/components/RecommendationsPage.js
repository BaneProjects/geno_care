
const RecommendationsPage = () => {
  return (
 
    <div className="recommendation">
     <div className="title">
     <h1>Recommendations</h1>
     </div>
      <div className="holder">
      <div className="screenings">

      <div className="spec_screenings">  
    
        <h3>Condition-Specific Screenings:</h3>
        <p><span className="enumeration">1. Cancer Screenings:</span>Based on your family history (e.g., thyroid cancer), discussions with a healthcare provider about the appropriate age to start
        and frequency of specific cancer screenings are important.Forexampe, thyroid ultrasound or thyroid function tests could be considered if there are simptoms or a strong family history.
        </p>
        <p><span className="enumeration">2. Neurological Evaluations:</span>For individuals with a family history of Parkinsons disease, being aware of early symptoms and discussing them with a healthcare provider is important. There isnt a routine
        screening for Parkinsons, but awareness of symptoms can prompt early evaluation.</p>
      </div>

      <div className="health_screenings">
      <h3>General Health Screenings</h3>
      <p><span className="enumeration">1. Physical Exam:</span>At least once every 1-3 years.This exam will tipically include cheks for blood pressure, body mass index (BMI), and a general assesment of overall health.</p>
      <p><span className="enumeration">2. Blood Pressure Screening:</span>Annually, especially if there are risk factors like family history of heart disease or previus high readings</p>
      <p><span className="enumeration">3. Cholesterol Check:</span>Every 4-6 years for individuals at averege risk; more frequently if there are risk factors for heart disease. </p>
      <p><span className="enumeration">4. Ddiabetes Screening:</span>If there are risk factors such as family history, obesity, or high blood pressure,
       screening for diabetes should be considered. Testing frequency should be based on initial results and risk level. 
      </p>
      </div>
      </div>

      <div className="sidebar">
       <div className="first_card">
        <p>If you visit the following clinics for examination, we will be able to download the results of the examination and store them in our application:</p>
        <ul>
          <li><span >Chronomics</span>(all types of checkups, discount 10% with GENOCARE promocode)</li>
          <li><span>Dynamic Labs</span>(all types of checkups, discount 20% with GENOCARE promocode)</li>
          <li><span>Euromedic</span>(all types of checkups)</li>
        </ul>

       </div>
       <div className="overview">
            <p>Healthy Longevity Plan. Main ideas</p>
            <button className="btn">Overview</button>
       </div>
      </div>
      </div>
      <div className="note">
        <p className="note_title">General Note:</p>
        <p className="note_text">These guidelines are general recommendations, and the best course of action is to have a personalized conversation with a healthcare provider. They can offer advice tailored to the
          indivuduals health history, lifestyle, and specific risk factors, adjusting screening frequencies as needed. Regular healthcare visits are crucial for discussing any new symptoms, changes in health, and updating screening
          schedules based on age and health status.
        </p>
      </div>
    </div>
  
  );
};

export default RecommendationsPage;