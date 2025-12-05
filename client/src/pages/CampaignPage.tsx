import React from "react";
import { motion } from "framer-motion";
import { Heart, Users, Utensils, HandHeart } from "lucide-react";
import { Button } from "../components/ui/button"
import { Card } from "../components/ui/card";
import { CardContent } from "../components/ui/card";
import Header from "../components/Header";

// Campaign Page for KPF - Feed One Save One (FOSO)
// Matches MIWI project's UI/UX style: clean, soft shadows, rounded corners, grid layout.

export default function CampaignPage() {
    return (
        <>
        <div>
            <Header />
        </div>
        <div
            className="w-full min-h-screen bg-gray-300 py-12 px-4 md:px-12 relative bg-cover bg-center bg-fixed"
            style={{
            backgroundImage: "url('/Images/foso.jpeg')",
            }}
        >
            {/* subtle dark overlay for contrast */}
            <div className="absolute inset-0 bg-black/40 backdrop-blur-sm pointer-events-none" />

            {/* Content wrapper above overlay */}
            <div className="relative z-10">
            {/* Header Section */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="max-w-4xl mx-auto text-center"
            >
                <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 drop-shadow-md">
                Feed One Save One (FOSO)
                </h1>
                <p className="text-white/90 text-lg md:text-xl leading-relaxed max-w-3xl mx-auto">
                A flagship humanitarian initiative of the Kayode Philip Foundation (KPF), dedicated to fighting hunger, improving wellbeing, and empowering rural communities across Nigeria.
                </p>
            </motion.div>

            {/* About Section */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="max-w-5xl mx-auto mt-16 grid md:grid-cols-2 gap-8"
            >
                <Card className="rounded-2xl shadow-lg bg-white border border-white/20 transform hover:-translate-y-2 transition">
                <CardContent className="p-6">
                    <h2 className="text-2xl font-semibold mb-4 text-gray-800">About the Campaign</h2>
                    <p className="text-gray-700 leading-relaxed">
                    Feed One Save One (FOSO) is a lifesaving initiative designed to bring hope and nourishment to underprivileged communities. KPF believes that sometimes one meal or basic support can change a life forever.
                    </p>
                    <p className="text-gray-700 mt-4 leading-relaxed">
                    Beyond feeding, FOSO promotes health, wellbeing, and empowerment by supporting the elderly and providing youth with life-changing skill development opportunities.
                    </p>
                </CardContent>
                </Card>

                <Card className="rounded-2xl shadow-lg bg-white border border-white/20 transform hover:-translate-y-2 transition">
                <CardContent className="p-6">
                    <h2 className="text-2xl font-semibold mb-4 text-gray-800">Objectives</h2>
                    <ul className="space-y-2 text-gray-700 list-disc list-inside">
                    <li>Provide nutritious meals to vulnerable families.</li>
                    <li>Deliver basic health interventions, such as eyeglasses for the elderly.</li>
                    <li>Empower youth through skill development programs.</li>
                    <li>Promote community awareness about nutrition and development.</li>
                    </ul>
                </CardContent>
                </Card>
            </motion.div>

            {/* Activities */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.7, delay: 0.3 }}
                className="max-w-6xl mx-auto mt-20"
            >
                <h2 className="text-3xl font-semibold text-center text-white mb-10 drop-shadow-md">Project Activities</h2>

                <div className="grid md:grid-cols-3 gap-8">
                <Card className="rounded-2xl shadow-lg bg-white/80 backdrop-blur-sm border border-white/10 transform hover:scale-[1.02] transition">
                    <CardContent className="p-6 text-center">
                    <Utensils className="w-10 h-10 mx-auto mb-4 text-gray-800" />
                    <h3 className="font-semibold text-xl mb-2">Food Distribution</h3>
                    <p className="text-gray-700">Hot meals and food packages delivered to families in need.</p>
                    </CardContent>
                </Card>

                <Card className="rounded-2xl shadow-lg bg-white/80 backdrop-blur-sm border border-white/10 transform hover:scale-[1.02] transition">
                    <CardContent className="p-6 text-center">
                    <HandHeart className="w-10 h-10 mx-auto mb-4 text-gray-800" />
                    <h3 className="font-semibold text-xl mb-2">Healthcare Support</h3>
                    <p className="text-gray-700">Basic medical checks and essential health items for the elderly.</p>
                    </CardContent>
                </Card>

                <Card className="rounded-2xl shadow-lg bg-white/80 backdrop-blur-sm border border-white/10 transform hover:scale-[1.02] transition">
                    <CardContent className="p-6 text-center">
                    <Users className="w-10 h-10 mx-auto mb-4 text-gray-800" />
                    <h3 className="font-semibold text-xl mb-2">Youth Empowerment</h3>
                    <p className="text-gray-700">Skill development, mentorship, and vocational training.</p>
                    </CardContent>
                </Card>
                </div>
            </motion.div>

            {/* Impact Section */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.7, delay: 0.4 }}
                className="max-w-4xl mx-auto mt-20"
            >
                <h2 className="text-3xl font-semibold text-center text-white mb-6 drop-shadow-md">Our Impact</h2>
                <p className="text-center text-white/90 max-w-3xl mx-auto leading-relaxed">
                FOSO is transforming lives one step at a time. Through feeding programs, health interventions, and youth empowerment, we help build stronger and healthier communities.
                </p>
            </motion.div>

            {/* Support Section */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.7, delay: 0.5 }}
                className="max-w-4xl mx-auto mt-16 text-center"
            >
                <Heart className="w-12 h-12 mx-auto mb-4 text-red-400" />
                <h2 className="text-3xl font-semibold mb-3 text-white drop-shadow-md">Support the Mission</h2>
                <p className="text-white/90 mb-6">
                Your contribution helps us serve more families, support the elderly, and empower the next generation.
                </p>

                <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 justify-center">
                <a
                    href="/#donate"
                    className="inline-flex items-center justify-center bg-purple-700 text-white py-4 px-8 rounded-2xl shadow-xl hover:from-orange-500 hover:to-rose-600 transition font-medium text-lg"
                >
                    Donate Now
                </a>
              
                </div>
            </motion.div>
            </div>
        </div>
        </>
    );
}
