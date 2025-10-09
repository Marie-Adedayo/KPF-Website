

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
    { id: '1', student_name: 'Asoju Irede', school_name: 'Wonderful Nursery & Primary School', category: 'Primary', score: 68, position: 1 },
    { id: '2', student_name: 'Johnson Joy', school_name: 'Intellect Bright Hope School', category: 'Primary', score: 62, position: 2 },
    { id: '3', student_name: 'Oyeleke Zion', school_name: 'Bethel School', category: 'Primary', score: 62, position: 3 },
    { id: '4', student_name: 'Olusegun Isaac', school_name: 'Rose Providence School', category: 'Primary', score: 60, position: 4 },
    { id: '5', student_name: 'Edunweye Samuel', school_name: 'Wonderful School', category: 'Primary', score: 59, position: 5 },
    { id: '6', student_name: 'Adesina Oluwafemi', school_name: 'Christ Victory Academy', category: 'Primary', score: 59, position: 6 },
    { id: '7', student_name: 'Lucky Victoria', school_name: 'De Best Gloryland School', category: 'Primary', score: 59, position: 7 },
    { id: '8', student_name: 'Admas Deborah', school_name: 'Upper Standard High School', category: 'Primary', score: 58, position: 8 },
    { id: '9', student_name: 'Oluwamayokun Wuraola', school_name: ' Bethel School', category: 'Primary', score: 57, position: 9 },
    { id: '10', student_name: 'Adebowale Adesire', school_name: 'Gloryland Kiddies School', category: 'Primary', score: 56, position: 10 },
    { id: '11', student_name: 'Kadri Ameerah', school_name: 'Upper Standard High School', category: 'Primary', score: 56, position: 11 },
    { id: '12', student_name: 'Bello Yusuf', school_name: 'Hamkod Rahmat Islamiyah School', category: 'Primary', score: 54, position: 12 },
    { id: '13', student_name: 'Ogunbayo Tanimola', school_name: 'Bright Hope School', category: 'Primary', score: 54, position: 13 },
    { id: '14', student_name: 'Odunjo Samuel', school_name: 'The Sparkling Light School', category: 'Primary', score: 53, position: 14 },
    { id: '15', student_name: 'Alli Ade Busola', school_name: 'Hamilab Model; School', category: 'Primary', score: 52, position: 15 },
    { id: '16', student_name: 'Bada Opeyemi', school_name: 'Joy Heart School', category: 'Primary', score: 51, position: 16 },
    { id: '17', student_name: 'Moses Ayoola', school_name: 'Hanilab Model School', category: 'Primary', score: 51, position: 17 },
    { id: '18', student_name: ' Ogunshakin Rokeebat ', school_name: 'Rose Providence School', category: 'Primary', score: 48, position: 18 },
    { id: '19', student_name: 'Amosu Olamilekan', school_name: 'Focus Academy Private School', category: 'Primary', score: 47, position: 19 },
    { id: '20', student_name: 'Oreoluwa Ojodu', school_name: 'Delight Destiny Model School', category: 'Primary', score: 43, position: 20 },
    { id: '21', student_name: 'Ireoluwa Ishola', school_name: 'Delight Destiny Model  School', category: 'Primary', score: 39, position: 21 },
    { id: '22', student_name: 'Olufade Desire', school_name: 'The Sparkling Light School', category: 'Primary', score: 37, position: 22 },
    { id: '23', student_name: 'Dosumu Tofunmi', school_name: 'Focus Academy', category: 'Primary', score: 36, position: 23 },
    { id: '24', student_name: 'Balogun Ireoluwa', school_name: 'Cregty Vedo Academy', category: 'Primary', score: 33, position: 24 },
    { id: '25', student_name: ' Olabanji Yemisi', school_name: 'Christ Victory Academy', category: 'Primary', score: 27, position: 25 },
    { id: '26', student_name: 'Mubashir Neemah', school_name: 'Hamkod Rahmat Islamiyah School', category: 'Primary', score: 23, position: 26 },
    
    // 11 Junior Secondary
    { id: '30', student_name: 'Johnson Godwin', school_name: 'Intelect Bright Hope School', category: 'Junior Secondary', score: 90, position: 1 },
    { id: '31', student_name: 'Ibikunle Joy', school_name: 'Bethel High School', category: 'Junior Secondary', score: 81, position: 2 },
    { id: '32', student_name: 'Olanipekun Kathrine', school_name: 'D Peak Apt School', category: 'Junior Secondary', score: 79, position: 3 },
    { id: '33', student_name: 'Owoeye Khodijah', school_name: 'Hamkod Rahmat Islamiyah School', category: 'Junior Secondary', score: 73, position: 4 },
    { id: '34', student_name: 'Thomas Abraham', school_name: 'Upper Standard Hight School', category: 'Junior Secondary', score: 70, position: 5 },
    { id: '35', student_name: 'Oni Excel', school_name: 'De Best Gloryland College', category: 'Junior Secondary', score: 69, position: 6 },
    { id: '36', student_name: 'Adelowo Goodluck', school_name: 'Delight Destiny Model Schoool', category: 'Junior Secondary', score: 69, position: 7 },
    { id: '37', student_name: 'Raimi Rodiat', school_name: 'Focus Academy Private School', category: 'Junior Secondary', score: 62, position: 8 },
    { id: '38', student_name: 'Djossou Akande', school_name: 'The Sparkling Light School', category: 'Junior Secondary', score: 50, position: 9 },
    { id: '39', student_name: 'Oladokun Emmanuel', school_name: 'Delight Destiny Model School', category: 'Junior Secondary', score: 48, position: 10 },
    { id: '40', student_name: 'Fashola Enitan', school_name: 'Joy Heart School', category: 'Junior Secondary', score: 13, position: 11 },

    // 8 Senior Secondary
    { id: '41', student_name: 'Ogunlolu Covenant', school_name: 'De Best Gloryland School', category: 'Senior Secondary', score: 72, position: 1 },
    { id: '42', student_name: 'Ojo David', school_name: 'Bethel High School', category: 'Senior Secondary', score: 64, position: 2 },
    { id: '43', student_name: 'Olaniyan David', school_name: 'D  Peak Apt School', category: 'Senior Secondary', score: 61, position: 3 },
    { id: '44', student_name: 'Okunade Emmanuel', school_name: 'The Sparkling Light School', category: 'Senior Secondary', score: 57, position: 4 },
    { id: '45', student_name: 'Ojuolape Eniola', school_name: 'Upper Standard High School', category: 'Senior Secondary', score: 54, position: 5 },
    { id: '46', student_name: 'Baderin Adedeji', school_name: 'Focus Academy Private School', category: 'Senior Secondary', score: 53, position: 6 },
    { id: '47', student_name: 'Olokojobi FareeDah', school_name: 'intellect Bright Hope School ', category: 'Senior Secondary', score: 51, position: 7 },
    { id: '48', student_name: 'Oyedepo Rodiat ', school_name: 'Hamkod Rahmat Islamiyah School', category: 'Senior Secondary', score: 50, position: 8 },
];