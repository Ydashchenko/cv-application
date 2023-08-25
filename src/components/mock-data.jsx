import uniqid from 'uniqid'

export const mockData = {
    generalInfo: {
        fullName: 'Yevhenii Dashchenko',
        eMail: "aboba-example@gmail.com",
        phoneNumber: "+380 123 456 789",
        address: "Kremenchuk, Ukraine"
    },

    sections: {
        educations: [
            {
                degree: "Bachelor in Automatization",
                schoolName: "Mykhailo Ostrohradskyi Kremenchuk National University",
                location: "Kremenchuk, Ukraine",
                startDate: "09/2016",
                endDate: "07/2020",
                isCollapsed: true,
                isHidden: false,
                id: uniqid()
            },
            {
                degree: "Midlane fundamentals",
                schoolName: "League of legends university",
                location: "Kremenchuk, Ukraine",
                startDate: "09/2017",
                endDate: "present",
                isCollapsed: true,
                isHidden: false,
                id: uniqid()
            }
        ],

        experiences: [
            {
                companyName: "Skyeng",
                positionTitle: "Senior Teacher",
                location: "online",
                description:
                    "Taught people English, made lessons, helped people to improve their speaking skills.",
                startDate: "05/2019",
                endDate: "02/2022",
                isCollapsed: true,
                isHidden: false,
                id: uniqid(),
            },
            {
                companyName: "Insha Osvita",
                positionTitle: "Main Counselor, teacher, speaking club tutor",
                location: "Kremenchuk, Ukraine",
                description:
                    "Organized speaking clubs with live acoustic songs, made camp program, conducted both individual and group classes.",
                startDate: "04/2018",
                endDate: "02/2019",
                isCollapsed: true,
                isHidden: false,
                id: uniqid(),
            },
        ],
    }
}