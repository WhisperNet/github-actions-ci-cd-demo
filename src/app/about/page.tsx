export default function About() {
  const teamMembers = [
    {
      name: 'John Doe',
      role: 'Frontend Developer',
      image: '/team1.jpg',
      bio: 'Passionate about creating beautiful user experiences',
    },
    {
      name: 'Jane Smith',
      role: 'Backend Developer',
      image: '/team2.jpg',
      bio: 'Expert in scalable system architecture',
    },
    {
      name: 'Mike Johnson',
      role: 'UI/UX Designer',
      image: '/team3.jpg',
      bio: 'Crafting intuitive and engaging designs',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-white">
        <div className="container mx-auto px-4 py-20">
          <div className="text-center">
            <h1 className="text-5xl font-bold text-gray-800 mb-6">About Us</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We&apos;re a passionate team dedicated to building amazing web
              experiences with the latest technologies and best practices.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold text-gray-800 mb-6">Our Story</h2>
            <p className="text-gray-600 mb-6">
              Founded in 2024, DemoApp started as a simple idea to showcase the
              power of modern web development. We believe in creating
              applications that are not only functional but also beautiful and
              user-friendly.
            </p>
            <p className="text-gray-600 mb-6">
              Our journey began with a small team of developers who shared a
              common vision: to push the boundaries of what&apos;s possible with
              web technologies like Next.js, React, and TypeScript.
            </p>
            <div className="grid grid-cols-2 gap-4">
              <div className="text-center p-4 bg-white rounded-lg shadow">
                <div className="text-2xl font-bold text-blue-600">2024</div>
                <div className="text-gray-600">Founded</div>
              </div>
              <div className="text-center p-4 bg-white rounded-lg shadow">
                <div className="text-2xl font-bold text-blue-600">3</div>
                <div className="text-gray-600">Team Members</div>
              </div>
            </div>
          </div>
          <div className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
            <p className="mb-4">
              To democratize modern web development by creating tools and
              resources that help developers build better applications faster.
            </p>
            <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
            <p>
              A world where creating beautiful, performant web applications is
              accessible to everyone, regardless of their experience level.
            </p>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="bg-white py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-16">
            Meet Our Team
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="text-center">
                <div className="w-32 h-32 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full mx-auto mb-4 flex items-center justify-center text-white text-2xl font-bold">
                  {member.name
                    .split(' ')
                    .map((n) => n[0])
                    .join('')}
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  {member.name}
                </h3>
                <p className="text-blue-600 font-medium mb-4">{member.role}</p>
                <p className="text-gray-600">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="container mx-auto px-4 py-20">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-16">
          Our Values
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="text-center p-6">
            <div className="text-4xl mb-4">🚀</div>
            <h3 className="text-xl font-semibold mb-2">Innovation</h3>
            <p className="text-gray-600">
              Always exploring new technologies and approaches
            </p>
          </div>
          <div className="text-center p-6">
            <div className="text-4xl mb-4">🤝</div>
            <h3 className="text-xl font-semibold mb-2">Collaboration</h3>
            <p className="text-gray-600">
              Working together to achieve common goals
            </p>
          </div>
          <div className="text-center p-6">
            <div className="text-4xl mb-4">🎯</div>
            <h3 className="text-xl font-semibold mb-2">Excellence</h3>
            <p className="text-gray-600">
              Committed to delivering the highest quality
            </p>
          </div>
          <div className="text-center p-6">
            <div className="text-4xl mb-4">💡</div>
            <h3 className="text-xl font-semibold mb-2">Creativity</h3>
            <p className="text-gray-600">
              Thinking outside the box to solve problems
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
