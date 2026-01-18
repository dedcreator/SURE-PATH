import { FaUniversity, FaSun, FaGraduationCap, FaBriefcase } from 'react-icons/fa'

const programs = [
  {
    icon: FaUniversity,
    title: 'Semester Abroad',
    description: 'Full academic semester programs at top universities worldwide.',
    duration: '4-6 months',
    countries: '30+ countries',
    color: 'bg-blue-100 text-surepath-blue',
  },
  {
    icon: FaSun,
    title: 'Summer Programs',
    description: 'Short-term intensive courses during summer break.',
    duration: '4-8 weeks',
    countries: '25+ countries',
    color: 'bg-green-100 text-green-600',
  },
  {
    icon: FaGraduationCap,
    title: 'Degree Programs',
    description: 'Complete your entire degree at an international university.',
    duration: '2-4 years',
    countries: '40+ countries',
    color: 'bg-purple-100 text-purple-600',
  },
  {
    icon: FaBriefcase,
    title: 'Internship Abroad',
    description: 'Combine work experience with international study.',
    duration: '3-12 months',
    countries: '20+ countries',
    color: 'bg-orange-100 text-orange-600',
  },
]

export default function Programs() {
  return (
    <section className="py-20 bg-surepath-light">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-surepath-dark-blue mb-4">
            Our Study Abroad Programs
          </h2>
          <p className="text-lg text-gray-600">
            Choose from a variety of programs designed to match your academic goals and personal interests
          </p>
        </div>

        {/* Programs Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {programs.map((program, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300 border border-gray-100"
            >
              <div className={`w-14 h-14 ${program.color} rounded-xl flex items-center justify-center mb-6`}>
                <program.icon className="w-7 h-7" />
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {program.title}
              </h3>
              
              <p className="text-gray-600 mb-6">
                {program.description}
              </p>
              
              <div className="space-y-3 mb-6">
                <div className="flex items-center text-sm text-gray-500">
                  <span className="w-24">Duration:</span>
                  <span className="font-medium text-gray-900">{program.duration}</span>
                </div>
                <div className="flex items-center text-sm text-gray-500">
                  <span className="w-24">Available in:</span>
                  <span className="font-medium text-gray-900">{program.countries}</span>
                </div>
              </div>
              
              <button className="w-full text-surepath-blue font-semibold py-3 rounded-lg border border-surepath-blue hover:bg-surepath-light transition-colors">
                Learn More →
              </button>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <button className="bg-surepath-blue text-white px-8 py-3 rounded-lg font-semibold hover:bg-surepath-dark-blue transition-colors">
            View All Programs
          </button>
        </div>
      </div>
    </section>
  )
}