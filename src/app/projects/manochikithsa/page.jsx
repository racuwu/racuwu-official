import React from 'react';
import { FaCalendar, FaClock, FaUsers, FaUserTie } from 'react-icons/fa';

// Format date function
const formatDate = (dateString) => {
  return new Date(dateString).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
};

// Data fetching function using Server Components
async function getArticles() {
  try {
    const response = await fetch('https://racuwu-dev.azurewebsites.net/api/posts/search?tags=6&limit=100', {
      next: { revalidate: 3600 } // Revalidate every hour
    });
    
    if (!response.ok) {
      throw new Error('Failed to fetch articles');
    }
    
    const data = await response.json();
    return data.data.posts;
  } catch (error) {
    console.error('Error fetching articles:', error);
    return [];
  }
}

// Main component
export default async function ProjectPage() {
  const articles = await getArticles();

  const timelineData = [
    {
      phase: "Phase 1",
      title: "Awareness Flyer Series",
      description: "Distribution of educational materials covering key mental health disorders including Anxiety, OCD, PTSD, and ADHD through social media and university channels."
    },
    {
      phase: "Phase 2",
      title: "Mental Health Session & Counseling",
      description: "Led by Dr. Thilina Wickramasinghe, featuring comprehensive sessions on stress management, emotional resilience, and personalized counseling."
    }
  ];

  const volunteers = [
    {
      role: "Project Chairperson",
      name: "K. Sumedha"
    },
    {
      role: "Project Chairperson",
      name: "G.L.Y. Dulmi Perera"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-yellow-50 to-white pt-16">
      {/* Hero Section */}
      <section className="relative h-96 bg-gradient-to-r from-teal-900 to-teal-600 text-white">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="container mx-auto px-6 relative h-full flex flex-col justify-center">
          <h1 className="text-5xl font-bold mb-4 text-yellow-300">Manochikithsa</h1>
          <p className="text-xl max-w-2xl">A mental health awareness and suicide prevention initiative by the Rotaract Club of Uva Wellassa University - Badulla</p>
        </div>
      </section>

      {/* Project Details */}
      <section className="py-16 container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-lg flex items-center space-x-4">
            <FaCalendar className="text-teal-600 text-3xl" />
            <div>
              <h3 className="font-semibold text-gray-800">Initiation Date</h3>
              <p className="text-gray-600">29th October 2024</p>
            </div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg flex items-center space-x-4">
            <FaClock className="text-teal-600 text-3xl" />
            <div>
              <h3 className="font-semibold text-gray-800">Volunteer Hours</h3>
              <p className="text-gray-600">140 hours</p>
            </div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg flex items-center space-x-4">
            <FaUsers className="text-teal-600 text-3xl" />
            <div>
              <h3 className="font-semibold text-gray-800">Secondary Avenues</h3>
              <p className="text-gray-600">Membership Development</p>
            </div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg flex items-center space-x-4">
            <FaUserTie className="text-teal-600 text-3xl" />
            <div>
              <h3 className="font-semibold text-gray-800">Project Lead</h3>
              <p className="text-gray-600">K. Sumedha</p>
            </div>
          </div>
        </div>
      </section>

      {/* Description */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-8 text-gray-800">About the Project</h2>
          <div className="prose max-w-none text-gray-600">
            <p className="mb-6">
              In October 2024, the Rotaract Club of Uva Wellassa University - Badulla launched Manochikithsa, 
              addressing mental health awareness and suicide prevention. This transformative initiative aims to 
              combat stigma surrounding mental health through open dialogue and practical tools for emotional well-being.
            </p>
            <p>
              The project significantly increased awareness of mental health issues among participants, established 
              safe spaces for discussions and peer support, and fostered a proactive culture that encouraged early 
              interventions and professional help.
            </p>
          </div>
        </div>
      </section>

      {/* Articles Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12 text-gray-800">Mental Health Resources</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map((article) => (
              <a key={article.id} className="bg-white rounded-lg shadow-lg overflow-hidden" href={"https://blog.racuwu.com/post/"+article.id}>
                {article.image && (
                  <div className="relative h-48 w-full">
                    <img
                      src={article.image}
                      alt={article.title}
                      className="object-cover w-full h-full"
                    />
                  </div>
                )}
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 text-gray-800">{article.title}</h3>
                  <p className="text-gray-600 text-sm mb-4">
                    {formatDate(article.publishedAt)}
                  </p>
                  <p className="text-gray-600 mb-4 line-clamp-3">{article.excerpt}</p>
                  <div className="flex items-center space-x-4">
                    {article.postMembers.map((member) => (
                      <div key={member.id} className="flex items-center space-x-2">
                        <img
                          src={member.photo}
                          alt={member.name}
                          className="w-8 h-8 rounded-full object-cover"
                        />
                        <span className="text-sm text-gray-600">{member.name}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12 text-gray-800">Project Timeline</h2>
          <div className="space-y-8">
            {timelineData.map((item, index) => (
              <div key={index} className="flex flex-col md:flex-row gap-4">
                <div className="md:w-1/4">
                  <h3 className="text-xl font-bold text-teal-600">{item.phase}</h3>
                </div>
                <div className="md:w-3/4 bg-white p-6 rounded-lg shadow-lg">
                  <h4 className="text-lg font-semibold mb-2">{item.title}</h4>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Volunteers */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-8 text-gray-800">Project Leaders</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {volunteers.map((volunteer, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-lg font-semibold text-gray-800">{volunteer.name}</h3>
                <p className="text-gray-600">{volunteer.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}