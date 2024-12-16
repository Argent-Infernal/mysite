import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";
import { SiNestjs, SiPrisma, SiTypescript } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { BsFiletypeScss } from "react-icons/bs";
import { DiPostgresql } from "react-icons/di";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";

const MYSTACK = [
    { title: 'NextJS', description: 'Фреймворк для React, который позволяет создавать серверные приложения и статические сайты с помощью рендеринга на стороне сервера и статической генерации.', icon: RiNextjsFill },
    { title: 'NestJS', description: 'Прогрессивный фреймворк для создания эффективных серверных приложений на Node.js, использующий TypeScript и вдохновленный архитектурой Angular.', icon: SiNestjs },
    { title: 'React', description: 'Библиотека для создания пользовательских интерфейсов, позволяющая строить многоразовые компоненты и управлять состоянием приложения.', icon: FaReact },
    { title: 'TypeScript', description: 'Язык программирования, разработанный Microsoft, который расширяет возможности JavaScript, добавляя статическую типизацию. Это позволяет разработчикам выявлять ошибки на этапе компиляции, улучшает автозаполнение в редакторах и делает код более предсказуемым и понятным.', icon: SiTypescript },
    { title: 'Tailwind CSS', description: 'Утилитарный CSS-фреймворк, который позволяет быстро создавать кастомные дизайны без необходимости показа стилей в файлах CSS.', icon: RiTailwindCssFill },
    { title: 'SCSS', description: 'Препроцессор CSS, который добавляет возможности, такие как вложенность, переменные и миксины, для более организованного и масштабируемого кода.', icon: BsFiletypeScss },
    { title: 'PostgreSQL', description: 'Мощная объектно-реляционная система управления базами данных с открытым исходным кодом, известная своей надежностью и поддержкой сложных запросов.', icon: DiPostgresql },
    { title: 'Prisma', description: 'Современный ORM для Node.js и TypeScript, который упрощает работу с базами данных, предоставляя типизированный доступ к данным и миграции.', icon: SiPrisma },
];

export default function MyStackSection() {
    return (
        <div className="flex flex-col items-center justify-start border-t">
            <h1 className="text-4xl my-8 text-center">Мой Стек Технологий</h1>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto px-4">
                {MYSTACK.map((item, index) => (
                    <div key={index} className="flex flex-col items-center p-4 transition-transform transform hover:scale-105">
                        {index % 2 === 0 ? (
                            <>
                                <div className="flex justify-center items-center mb-4">
                                    <div className="text-5xl text-primary transition-transform transform hover:scale-110">
                                        {<item.icon />}
                                    </div>
                                </div>
                                <Card className="w-full shadow-xl transition-shadow hover:shadow-2xl">
                                    <CardHeader>
                                        <CardTitle>{item.title}</CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <p>{item.description}</p>
                                    </CardContent>
                                </Card>
                            </>
                        ) : (
                            <>
                                <Card className="w-full shadow-xl transition-shadow hover:shadow-2xl">
                                    <CardHeader>
                                        <CardTitle>{item.title}</CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <p>{item.description}</p>
                                    </CardContent>
                                </Card>
                                <div className="flex justify-center items-center mt-4">
                                    <div className="text-5xl text-primary transition-transform transform hover:scale-110">
                                        {<item.icon />}
                                    </div>
                                </div>
                            </>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
}