import {
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Code2,
  Terminal,
  Database,
  Cloud,
  Cpu,
  TrainFront,
} from "lucide-react";
import ProfileImage from "./assets/profile.jpeg";
function App() {
  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto bg-white shadow-xl rounded-lg overflow-hidden transform hover:scale-[1.01] transition-transform duration-300">
        {/* Header Section */}
        <div className="bg-gradient-to-r from-gray-700 to-gray-900 px-8 py-12 text-white">
          <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
            {/* Profile Image */}
            <div className="relative">
              <img
                src={ProfileImage}
                alt="Professional headshot"
                className="w-40 h-40 rounded-full border-4 border-gray-200 shadow-lg transform hover:scale-105 transition-transform duration-300 object-cover"
              />
              <div className="absolute inset-0 rounded-full bg-gradient-to-t from-black/30 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
            </div>

            {/* Text Content */}
            <div className="text-center md:text-left flex-1">
              <div className="flex items-center justify-center md:justify-start gap-3 mb-2">
                <Code2 className="w-8 h-8 text-gray-300 animate-fade-in" />
                <h1 className="text-4xl font-bold animate-fade-in">
                  Kittisak Ardkonghan
                </h1>
              </div>
              <div className="flex items-center justify-center md:justify-start gap-2">
                <Terminal className="w-5 h-5 text-gray-300" />
                <h2 className="text-xl mt-2 text-gray-300">
                  Full-Stack Engineer
                </h2>
              </div>
              <div className="mt-4 flex flex-wrap gap-4 justify-center md:justify-start">
                <div className="flex items-center transform hover:-translate-y-1 transition-transform duration-200">
                  <Mail className="w-4 h-4 mr-2" />
                  <a
                    href="mailto:k.ardkonghan@gmail.com"
                    className="hover:text-gray-300"
                  >
                    k.ardkonghan@gmail.com
                  </a>
                </div>
                <div className="flex items-center transform hover:-translate-y-1 transition-transform duration-200">
                  <Phone className="w-4 h-4 mr-2" />
                  <span>(092) 776 5019</span>
                </div>
                <div className="flex items-center transform hover:-translate-y-1 transition-transform duration-200">
                  <MapPin className="w-4 h-4 mr-2" />
                  <span>Bangkok, Thailand</span>
                </div>
                {/* <div className="flex items-center transform hover:-translate-y-1 transition-transform duration-200">
                  <Github className="w-4 h-4 mr-2" />
                  <a href="https://github.com/johndeveloper" className="hover:text-gray-300">github.com/johndeveloper</a>
                </div> */}
                <div className="flex items-center transform hover:-translate-y-1 transition-transform duration-200">
                  <Linkedin className="w-4 h-4 mr-2" />
                  <a
                    target="_blank"
                    href="https://th.linkedin.com/in/kittisak-ardkonghan-36a3b8329"
                    className="hover:text-gray-300"
                  >
                    linkedin.com/in/kardkonghan
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="px-8 py-8">
          {/* Summary */}
          <section className="mb-8 hover:bg-gray-50 p-4 rounded-lg transition-colors duration-300">
            <div className="flex items-center gap-2 mb-4 border-b-2 border-gray-200 pb-2">
              <Terminal className="w-6 h-6 text-gray-700" />
              <h3 className="text-2xl font-semibold text-gray-800">
                Professional Summary
              </h3>
            </div>
            <p className="text-gray-600 leading-relaxed">
              With over 9 years of experience as a Software Engineer, I have
              developed a solid foundation in both frontend and backend
              development. I take pride in collaborating closely with clients,
              ensuring their needs are met through clear communication and
              well-documented solutions. Beyond development, I have experience
              mentoring and teaching, having served as a Teaching Assistant for
              the LINE Messaging Course and a Lecturer for AI Foundation on
              Google Colab.
            </p>
            <p className="text-gray-600 leading-relaxed mt-2">
              I have a growing interest in AI and its potential to drive
              innovation, having worked on a variety of applications across
              different industries such as aviation, automotive, and
              advertising. A highlight of my career so far includes placing
              second in a national LINE Hackathon, where I had the opportunity
              to contribute to a project for a major product company.
            </p>
            <p className="text-gray-600 leading-relaxed mt-2">
              I'm passionate about further developing my skills in solution
              architecture and infrastructure, with a particular focus on AI,
              and I am excited to continue learning and growing in this space.
            </p>
          </section>

          {/* Skills */}
          <section className="mb-8 hover:bg-gray-50 p-4 rounded-lg transition-colors duration-300">
            <div className="flex items-center gap-2 mb-4 border-b-2 border-gray-200 pb-2">
              <Cpu className="w-6 h-6 text-gray-700" />
              <h3 className="text-2xl font-semibold text-gray-800">
                Technical Skills
              </h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <div className="flex items-center gap-2">
                  <Code2 className="w-5 h-5 text-gray-700" />
                  <h4 className="font-medium text-gray-700 mb-2">Frontend</h4>
                </div>
                <div className="flex flex-wrap gap-2">
                  {[
                    "React.js",
                    "Vue.js",
                    "Angular",
                    "Next.js",
                    "Nuxt.js",
                    "Tailwind CSS",
                    "TypeScript",
                    "Redux",
                    "jQuery",
                    "Sass/SCSS",
                    "HTML5",
                    "CSS3",
                    "JavaScript (ES6+)",
                    "React Native",
                    "Astro",
                    "Ionic",
                  ].map((skill) => (
                    <span
                      key={skill}
                      className="bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-sm transform hover:scale-105 transition-transform duration-200 hover:bg-gray-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <Database className="w-5 h-5 text-gray-700" />
                  <h4 className="font-medium text-gray-700 mb-2">Backend</h4>
                </div>
                <div className="flex flex-wrap gap-2">
                  {[
                    "Node.js",
                    "Express.js",
                    "NestJS",
                    "Python (FastAPI)",
                    "Go (Fiber)",
                    "PostgreSQL",
                    "MongoDB",
                    "MySQL",
                    "Redis",
                    "GraphQL",
                    "AWS (Lambda, EC2, S3, etc.)",
                    "Firebase",
                    "Firebase Firestore",
                    "Elasticsearch",
                    "RabbitMQ",
                    "Celery",
                    "Flower",
                    "Docker",
                  ].map((skill) => (
                    <span
                      key={skill}
                      className="bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-sm transform hover:scale-105 transition-transform duration-200 hover:bg-gray-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <TrainFront className="w-5 h-5 text-gray-700" />
                  <h4 className="font-medium text-gray-700 mb-2">Additional</h4>
                </div>
                <div className="flex flex-wrap gap-2">
                  {[
                    "LangChain",
                    "Pinecone",
                    "Dialogflow",
                    "LINE Messaging API",
                    "Meta Messaging API",
                    "Google Colab",
                    "Git",
                    "Microsoft Azure",
                    "Application Deployment (App Store, Google Play)",
                    "Cloud Function Integration",
                  ].map((skill) => (
                    <span
                      key={skill}
                      className="bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-sm transform hover:scale-105 transition-transform duration-200 hover:bg-gray-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Experience */}
          <section className="mb-8">
            <div className="flex items-center gap-2 mb-4 border-b-2 border-gray-200 pb-2">
              <Cloud className="w-6 h-6 text-gray-700" />
              <h3 className="text-2xl font-semibold text-gray-800">
                Work Experience
              </h3>
            </div>

            <div className="mb-6 hover:bg-gray-50 p-4 rounded-lg transition-colors duration-300">
              <div className="flex justify-between items-baseline">
                <h4 className="text-xl font-medium text-gray-800">
                  Full-Stack Software Developer
                </h4>
                <span className="text-gray-600">2021 - Present</span>
              </div>
              <div className="text-gray-700 mb-2">Emetworks Co., Ltd</div>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li className="hover:translate-x-2 transition-transform duration-200">
                  Integrated Zendesk with customer communication platforms to
                  improve support workflows and ticket management.
                </li>

                <li className="hover:translate-x-2 transition-transform duration-200">
                  Built various marketing campaigns leveraging LINE’s frontend
                  framework, Messaging API, and LINE Login for point-based
                  earn-and-burn systems.
                </li>
                <li className="hover:translate-x-2 transition-transform duration-200">
                  Designed and implemented chatbot solutions for automated
                  interactions, including certificate generation and customer
                  support.
                </li>
                <li className="hover:translate-x-2 transition-transform duration-200">
                  Developed a chat platform integrating multiple social
                  channels, including LINE, Facebook, Twitter, and Instagram, to
                  enhance customer support and engagement.
                </li>
              </ul>
            </div>

            <div className="mb-6 hover:bg-gray-50 p-4 rounded-lg transition-colors duration-300">
              <div className="flex justify-between items-baseline">
                <h4 className="text-xl font-medium text-gray-800">
                  Platform Developer & Mobile App Lead
                </h4>
                <span className="text-gray-600">2016 - 2021</span>
              </div>
              <div className="text-gray-700 mb-2">Mirum Agency</div>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li className="hover:translate-x-2 transition-transform duration-200">
                  Developed applications for retail management, enabling rent
                  payments, maintenance requests, tenant registration, and
                  Developed applications for loyalty programs for mileage and
                  point accumulation.
                </li>
                <li className="hover:translate-x-2 transition-transform duration-200">
                  Built interactive kiosks for the automotive industry to
                  enhance customer engagement.
                </li>
                <li className="hover:translate-x-2 transition-transform duration-200">
                  Created interactive brochures for the automotive industry,
                  allowing users to explore car interiors, exteriors, safety
                  features, and technology.
                </li>
                <li className="hover:translate-x-2 transition-transform duration-200">
                  Developed a car registration system for campaign enrollments
                  and promotional events.
                </li>
                <li className="hover:translate-x-2 transition-transform duration-200">
                  Built mobile applications for iOS and Android in the
                  automotive industry, enhancing user experience and engagement.
                </li>
                <li className="hover:translate-x-2 transition-transform duration-200">
                  Developed responsive websites for finance, CSR initiatives,
                  automotive, and other industries.
                </li>
              </ul>
            </div>
            <div className="mb-6 hover:bg-gray-50 p-4 rounded-lg transition-colors duration-300">
              <div className="flex justify-between items-baseline">
                <h4 className="text-xl font-medium text-gray-800">
                  Website Developer
                </h4>
                <span className="text-gray-600">2016</span>
              </div>
              <div className="text-gray-700 mb-2">
                Lueck Media Oldenburg | Webdesign, eCommerce, SEO
              </div>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li className="hover:translate-x-2 transition-transform duration-200">
                  Developed frontend webiste for support eCommerce platform
                </li>
              </ul>
            </div>
          </section>

          {/* Education */}
          <section className="hover:bg-gray-50 p-4 rounded-lg transition-colors duration-300">
            <div className="flex items-center gap-2 mb-4 border-b-2 border-gray-200 pb-2">
              <Terminal className="w-6 h-6 text-gray-700" />
              <h3 className="text-2xl font-semibold text-gray-800">
                Education
              </h3>
            </div>
            <div className="flex justify-between items-baseline">
              <h4 className="text-xl font-medium text-gray-800">
                B.Sc. Infomation Engineering
              </h4>
              <span className="text-gray-600">2010 - 2016</span>
            </div>
            <div className="text-gray-700">
              Cologne University of applied Sciences, Germany
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

export default App;
