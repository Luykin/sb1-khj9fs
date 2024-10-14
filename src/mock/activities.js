const currentDate = new Date();

const formatDate = (date) => date.toISOString();

const addDays = (date, days) => {
  const result = new Date(date);
  result.setDate(result.getDate() + days);
  return result;
};

const subtractDays = (date, days) => {
  const result = new Date(date);
  result.setDate(result.getDate() - days);
  return result;
};

export const activities = [
  {
    id: 1,
    title: '技术创新研讨会',
    shortDescription: '探讨最新技术趋势',
    description: '与行业专家一起探讨人工智能、区块链等新兴技术的发展趋势及其在各行业中的应用前景。',
    participants: 80,
    maxParticipants: 150,
    startTime: formatDate(addDays(currentDate, 7)),
    endTime: formatDate(addDays(currentDate, 7)),
    registrationDeadline: formatDate(addDays(currentDate, 6)),
    image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80'
  },
  {
    id: 2,
    title: '程序员编程马拉松',
    shortDescription: '48小时编程挑战',
    description: '一场激动人心的48小时编程挑战，程序员们将组队开发创新项目，展示他们的编程技能和创造力。',
    participants: 60,
    maxParticipants: 100,
    startTime: formatDate(addDays(currentDate, 14)),
    endTime: formatDate(addDays(currentDate, 16)),
    registrationDeadline: formatDate(addDays(currentDate, 13)),
    image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80'
  },
  {
    id: 3,
    title: '人工智能与机器学习工作坊',
    shortDescription: '深度学习实践课程',
    description: '为期两天的实践工作坊，深入探讨人工智能和机器学习的最新进展，包括实际案例分析和动手编程环节。',
    participants: 40,
    maxParticipants: 50,
    startTime: formatDate(addDays(currentDate, 21)),
    endTime: formatDate(addDays(currentDate, 22)),
    registrationDeadline: formatDate(addDays(currentDate, 20)),
    image: 'https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80'
  },
  {
    id: 4,
    title: '开源技术交流会',
    shortDescription: '分享开源项目经验',
    description: '汇聚开源技术爱好者，分享各自参与的开源项目经验，讨论开源社区的发展趋势和机遇。',
    participants: 90,
    maxParticipants: 120,
    startTime: formatDate(addDays(currentDate, 30)),
    endTime: formatDate(addDays(currentDate, 30)),
    registrationDeadline: formatDate(addDays(currentDate, 29)),
    image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80'
  },
  {
    id: 5,
    title: '云计算与微服务架构论坛',
    shortDescription: '探讨云原生技术',
    description: '深入探讨云计算技术和微服务架构的最佳实践，包括容器化、服务网格、无服务器计算等热门话题。',
    participants: 70,
    maxParticipants: 100,
    startTime: formatDate(addDays(currentDate, 45)),
    endTime: formatDate(addDays(currentDate, 46)),
    registrationDeadline: formatDate(addDays(currentDate, 44)),
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1172&q=80'
  },
  {
    id: 6,
    title: '区块链技术研讨会',
    shortDescription: '探索区块链的未来',
    description: '深入了解区块链技术的最新发展，讨论其在金融、供应链、医疗等领域的创新应用。',
    participants: 60,
    maxParticipants: 120,
    startTime: formatDate(subtractDays(currentDate, 2)),
    endTime: formatDate(subtractDays(currentDate, 1)),
    registrationDeadline: formatDate(subtractDays(currentDate, 3)),
    image: 'https://images.unsplash.com/photo-1639322537228-f710d846310a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1632&q=80'
  },
  {
    id: 7,
    title: '数据科学与大数据分析峰会',
    shortDescription: '大数据时代的机遇与挑战',
    description: '探讨数据科学和大数据分析在各行业中的应用，分享最新的数据处理技术和分析方法。',
    participants: 85,
    maxParticipants: 150,
    startTime: formatDate(subtractDays(currentDate, 5)),
    endTime: formatDate(subtractDays(currentDate, 4)),
    registrationDeadline: formatDate(subtractDays(currentDate, 6)),
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80'
  },
  {
    id: 8,
    title: '网络安全与隐私保护论坛',
    shortDescription: '构建安全可靠的数字世界',
    description: '讨论最新的网络安全威胁和防御策略，探讨如何在数字时代保护个人和企业数据隐私。',
    participants: 75,
    maxParticipants: 100,
    startTime: formatDate(subtractDays(currentDate, 8)),
    endTime: formatDate(subtractDays(currentDate, 7)),
    registrationDeadline: formatDate(subtractDays(currentDate, 9)),
    image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80'
  }
];

export const getActivities = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        list: activities,
        total: activities.length,
      });
    }, 1000);
  });
};