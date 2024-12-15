'use client'

import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import HorizontalLine from "../ui/Custom/Horizontal-line";

export default function AboutSection() {
    return (
        <div className="flex flex-col items-center justify-start h-screen border-t">
            <div className="text-center my-8">
                <h1 className="text-4xl">О себе</h1>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-6xl mx-auto">
                <Card className="shadow-lg transition-transform transform hover:scale-105">
                    <CardHeader>
                        <CardTitle>Кратко о себе</CardTitle>
                    </CardHeader>
                    <CardContent>
                    <p className="leading-relaxed">
                            Я начинающий <span className="text-primary font-semibold">Fullstack</span> разработчик. 
                            С 14 лет изучаю программирование, начинал со скриптового языка Lua. 
                            Пробовал делать игры на Unity, но в конце концов нашёл своё пристанище в веб-разработке.
                        </p>
                    </CardContent>
                </Card>

                <Card className="shadow-lg transition-transform transform hover:scale-105">
                    <CardHeader>
                        <CardTitle>Моё образование</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className="leading-relaxed">Я учусь в Нижневартовском Государственном Университете по направлению информатика и вычислительная техника</p>
                    </CardContent>
                </Card>
            </div>
            
            <div className="mt-8 max-w-6xl mx-auto w-full">
                <Card className="shadow-lg transition-transform transform hover:scale-105 rounded-lg">
                    <CardHeader>
                        <CardTitle className="text-xl font-semibold">Мои взгляды на будущее</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className="leading-relaxed">
                            Я стремлюсь к постоянному развитию и изучению новых технологий. 
                            Мои цели включают создание инновационных веб-приложений и участие в значимых проектах, 
                            которые могут принести пользу обществу.
                        </p>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}