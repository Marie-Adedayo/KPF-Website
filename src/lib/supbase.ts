

export interface CompetitionResult {
  id: string;
  student_name: string;
  school_name: string;
  category: 'Primary' | 'Junior Secondary' | 'Senior Secondary';
  score: number;
  position: number;
}

export const CompetitionResult: CompetitionResult[] = [
    // 29 Primary
    { id: '1', student_name: 'Alice Johnson', school_name: 'Greenwood High', category: 'Primary', score: 95, position: 1 },
    { id: '2', student_name: 'Bob Smith', school_name: 'Lakeside Academy', category: 'Primary', score: 90, position: 2 },
    { id: '3', student_name: 'Charlie Brown', school_name: 'Hilltop School', category: 'Primary', score: 88, position: 3 },
    { id: '4', student_name: 'Emily Clark', school_name: 'Sunrise Primary', category: 'Primary', score: 87, position: 4 },
    { id: '5', student_name: 'Frank Lee', school_name: 'Maple Leaf School', category: 'Primary', score: 86, position: 5 },
    { id: '6', student_name: 'Grace Kim', school_name: 'Pinecrest Academy', category: 'Primary', score: 85, position: 6 },
    { id: '7', student_name: 'Henry Adams', school_name: 'Oakwood Primary', category: 'Primary', score: 84, position: 7 },
    { id: '8', student_name: 'Ivy Chen', school_name: 'Cedar Grove', category: 'Primary', score: 83, position: 8 },
    { id: '9', student_name: 'Jack Turner', school_name: 'Willow Creek', category: 'Primary', score: 82, position: 9 },
    { id: '10', student_name: 'Kara White', school_name: 'Elm Street School', category: 'Primary', score: 81, position: 10 },
    { id: '11', student_name: 'Liam Scott', school_name: 'Riverbank Primary', category: 'Primary', score: 80, position: 11 },
    { id: '12', student_name: 'Mia Evans', school_name: 'Sunset Academy', category: 'Primary', score: 79, position: 12 },
    { id: '13', student_name: 'Noah Brooks', school_name: 'Brookside School', category: 'Primary', score: 78, position: 13 },
    { id: '14', student_name: 'Olivia Reed', school_name: 'Highland Primary', category: 'Primary', score: 77, position: 14 },
    { id: '15', student_name: 'Paul Green', school_name: 'Valley View', category: 'Primary', score: 76, position: 15 },
    { id: '16', student_name: 'Quinn Hall', school_name: 'Forest Hill', category: 'Primary', score: 75, position: 16 },
    { id: '17', student_name: 'Ruby King', school_name: 'Summit Primary', category: 'Primary', score: 74, position: 17 },
    { id: '18', student_name: 'Sam Lee', school_name: 'Crescent School', category: 'Primary', score: 73, position: 18 },
    { id: '19', student_name: 'Tina Moore', school_name: 'Lighthouse Academy', category: 'Primary', score: 72, position: 19 },
    { id: '20', student_name: 'Uma Patel', school_name: 'Harmony Primary', category: 'Primary', score: 71, position: 20 },
    { id: '21', student_name: 'Victor Ross', school_name: 'Evergreen School', category: 'Primary', score: 70, position: 21 },
    { id: '22', student_name: 'Wendy Smith', school_name: 'Bluebell Primary', category: 'Primary', score: 69, position: 22 },
    { id: '23', student_name: 'Xander Young', school_name: 'Redwood Academy', category: 'Primary', score: 68, position: 23 },
    { id: '24', student_name: 'Yara Zane', school_name: 'Golden Gate', category: 'Primary', score: 67, position: 24 },
    { id: '25', student_name: 'Zane Fox', school_name: 'Silver Oak', category: 'Primary', score: 66, position: 25 },
    { id: '26', student_name: 'Ava Miles', school_name: 'Crystal Lake', category: 'Primary', score: 65, position: 26 },
    { id: '27', student_name: 'Ben Nash', school_name: 'Springfield Primary', category: 'Primary', score: 64, position: 27 },
    { id: '28', student_name: 'Cara Owen', school_name: 'Liberty School', category: 'Primary', score: 63, position: 28 },
    { id: '29', student_name: 'Dean Price', school_name: 'Heritage Primary', category: 'Primary', score: 62, position: 29 },

    // 11 Junior Secondary
    { id: '30', student_name: 'Diana Prince', school_name: 'Riverdale High', category: 'Junior Secondary', score: 92, position: 1 },
    { id: '31', student_name: 'Ethan Hunt', school_name: 'Central Junior', category: 'Junior Secondary', score: 90, position: 2 },
    { id: '32', student_name: 'Fiona Gale', school_name: 'Westside Junior', category: 'Junior Secondary', score: 89, position: 3 },
    { id: '33', student_name: 'George Lane', school_name: 'Eastwood Junior', category: 'Junior Secondary', score: 88, position: 4 },
    { id: '34', student_name: 'Hannah Ray', school_name: 'Northview Junior', category: 'Junior Secondary', score: 87, position: 5 },
    { id: '35', student_name: 'Ian Cole', school_name: 'Southgate Junior', category: 'Junior Secondary', score: 86, position: 6 },
    { id: '36', student_name: 'Julia Park', school_name: 'Hillcrest Junior', category: 'Junior Secondary', score: 85, position: 7 },
    { id: '37', student_name: 'Kyle Reed', school_name: 'Lakeshore Junior', category: 'Junior Secondary', score: 84, position: 8 },
    { id: '38', student_name: 'Lily Shaw', school_name: 'Brookfield Junior', category: 'Junior Secondary', score: 83, position: 9 },
    { id: '39', student_name: 'Mason Tate', school_name: 'Greenfield Junior', category: 'Junior Secondary', score: 82, position: 10 },
    { id: '40', student_name: 'Nina West', school_name: 'Parkside Junior', category: 'Junior Secondary', score: 81, position: 11 },

    // 8 Senior Secondary
    { id: '41', student_name: 'Oscar Black', school_name: 'Grandview Senior', category: 'Senior Secondary', score: 95, position: 1 },
    { id: '42', student_name: 'Paula White', school_name: 'Summit Senior', category: 'Senior Secondary', score: 93, position: 2 },
    { id: '43', student_name: 'Quentin Gray', school_name: 'Liberty Senior', category: 'Senior Secondary', score: 91, position: 3 },
    { id: '44', student_name: 'Rachel Blue', school_name: 'Heritage Senior', category: 'Senior Secondary', score: 89, position: 4 },
    { id: '45', student_name: 'Steve Gold', school_name: 'Everest Senior', category: 'Senior Secondary', score: 87, position: 5 },
    { id: '46', student_name: 'Tara Silver', school_name: 'Pioneer Senior', category: 'Senior Secondary', score: 85, position: 6 },
    { id: '47', student_name: 'Uma Brown', school_name: 'Victory Senior', category: 'Senior Secondary', score: 83, position: 7 },
    { id: '48', student_name: 'Victor Green', school_name: 'Crestview Senior', category: 'Senior Secondary', score: 81, position: 8 },
];