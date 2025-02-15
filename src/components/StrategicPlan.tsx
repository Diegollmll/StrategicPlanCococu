"use client"

import React, { createContext, useContext, useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Image from 'next/image';
import { LanguageSwitcher } from '@/components/LanguageSwitcher'; 
import { translations } from '@/translations';
import { useLanguage } from '@/contexts/LanguageContext';

interface Task {
  area: string;
  task: string;
  date: string;
}

interface MonthData {
  title: string;
  tasks: Task[];
}

interface CalendarDay {
    date: number;
    activities: {
      area: string;
      task: string;
    }[];
}

interface MonthCalendar {
    name: string;
    days: CalendarDay[];
}

interface TodoItem {
  id: string;
  area: string;
  task: string;
  isCompleted: boolean;
  category: string;
}

interface Translations {
  title: string;
  subtitle: string;
  description: string;
  tabs: {
    objectives: string;
    calendar: string;
    todo: string;
  };
  areas: {
    [key: string]: {
      title: string;
      objective: string;
      keyPoints: string[];
    };
  };
  tasks: {
    [key: string]: {
      [key: string]: string;
    };
  };
  todo: {
    completed: string;
    pending: string;
    tasksCompleted: string;
    of: string;
    progress: string;
  };
  calendar: {
    months: {
      [key: string]: string;
    };
  };
}

const StrategicPlan = () => {
  const [selectedTab, setSelectedTab] = useState('calendar');
  const [currentMonthIndex, setCurrentMonthIndex] = useState(0);
  const { language } = useLanguage();
  const t = translations[language] as Translations;
  

  const objectives = {
    "Acceso": {
      title: "Seguridad de Acceso",
      objective: "Garantizar vías y puentes seguros para toda la comunidad del Cañón, estableciendo un sistema de monitoreo y mantenimiento preventivo.",
      keyPoints: [
        "Evaluación técnica de 10 puentes principales",
        "Identificación y seguimiento mensual de problemas viales",
        "Mantenimiento preventivo de infraestructura",
        "Comunicación constante con la comunidad sobre riesgos"
      ]
    },
    "Ruido": {
      title: "Seguridad contra el Ruido",
      objective: "Crear un ambiente acústico respetuoso que proteja la tranquilidad de todos los residentes, especialmente enfermos, ancianos, niños y personas piadosas.",
      keyPoints: [
        "Educación sobre normas de ruido",
        "Trabajo conjunto con policía y comunidad",
        "Soluciones consensuadas con empresas y particulares",
        "Evaluación regular del impacto de medidas"
      ]
    },
    "Física": {
      title: "Seguridad Física",
      objective: "Establecer sistemas de prevención y respuesta ante emergencias ambientales y desastres naturales en todo el Cañón.",
      keyPoints: [
        "Sistema de comunicaciones de emergencia",
        "Detección temprana de riesgos ambientales",
        "Evaluación y prevención de desastres naturales",
        "Acceso a Internet para emergencias"
      ]
    },
    "Eléctrica": {
      title: "Seguridad Eléctrica",
      objective: "Asegurar un suministro eléctrico confiable y equitativo para toda la comunidad del Cañón.",
      keyPoints: [
        "Monitoreo de infraestructura eléctrica en riesgo",
        "Comunicación semanal sobre cortes programados",
        "Revisión del sistema de Gas",
        "Análisis de equidad en costos"
      ]
    },
    "Agua": {
      title: "Seguridad del Suministro Agua",
      objective: "Garantizar la calidad del agua y proteger los recursos hídricos del Cañón mediante monitoreo y educación.",
      keyPoints: [
        "Estudio mensual de 2 afluentes (24 total al año)",
        "Capacitación en manejo de residuos",
        "Control de contaminación del río",
        "Evaluación regular de calidad del agua"
      ]
    }
  };

  const activities: Record<string, MonthData> = {
    february: {
      title: "Febrero",
      tasks: [
        {
          area: "Acceso",
          task: "Inicio estudio técnico puentes (2 primeros) + Identificación primer problema mensual",
          date: "5-16 Feb"
        },
        {
          area: "Ruido",
          task: "Capacitación inicial normas de ruido + Mapeo zonas críticas",
          date: "12-23 Feb"
        },
        {
          area: "Agua",
          task: "Primeros 2 afluentes + Plan educación residuos",
          date: "19-28 Feb"
        }
      ]
    },
    march: {
      title: "Marzo",
      tasks: [
        {
          area: "Eléctrica",
          task: "Revisión sistema Gas + Inicio monitoreo cables",
          date: "4-15 Mar"
        },
        {
          area: "Agua",
          task: "Estudio afluentes 3-4 + Primera capacitación residuos",
          date: "11-22 Mar"
        },
        {
          area: "Acceso",
          task: "Evaluación puentes 3-4 + Seguimiento febrero",
          date: "18-29 Mar"
        }
      ]
    },
    april: {
      title: "Abril",
      tasks: [
        {
          area: "Física",
          task: "Implementación sistema comunicaciones emergencia",
          date: "1-12 Abr"
        },
        {
          area: "Acceso",
          task: "Estudio puentes 5-6 + Problema mensual nuevo",
          date: "15-26 Abr"
        },
        {
          area: "Agua",
          task: "Estudio afluentes 5-6 + Control contaminación",
          date: "22-30 Abr"
        }
      ]
    },
    may: {
      title: "Mayo",
      tasks: [
        {
          area: "Ruido",
          task: "Trabajo con policía para identificación de fuentes + Plan acción",
          date: "2-13 May"
        },
        {
          area: "Agua",
          task: "Estudio afluentes 7-8 + Evaluación medidas anteriores",
          date: "14-24 May"
        },
        {
          area: "Acceso",
          task: "Estudio puentes 7-8 + Seguimiento problemas identificados",
          date: "16-31 May"
        }
      ]
    },
    june: {
      title: "Junio",
      tasks: [
        {
          area: "Eléctrica",
          task: "Revisión costos y paridad + Actualización sistema Gas",
          date: "3-14 Jun"
        },
        {
          area: "Agua",
          task: "Estudio afluentes 9-10 + Segunda capacitación residuos",
          date: "10-21 Jun"
        },
        {
          area: "Física",
          task: "Actualización plan emergencias + Mapeo riesgos",
          date: "17-28 Jun"
        }
      ]
    },
    july: {
      title: "Julio",
      tasks: [
        {
          area: "Acceso",
          task: "Estudio puentes 9-10 + Evaluación semestral",
          date: "1-12 Jul"
        },
        {
          area: "Ruido",
          task: "Evaluación medidas implementadas + Ajustes necesarios",
          date: "15-26 Jul"
        },
        {
          area: "Agua",
          task: "Estudio afluentes 11-12 + Análisis semestral",
          date: "22-31 Jul"
        }
      ]
    },
    august: {
      title: "Agosto",
      tasks: [
        {
          area: "Eléctrica",
          task: "Mapeo zonas riesgo + Mantenimiento preventivo",
          date: "5-16 Ago"
        },
        {
          area: "Física",
          task: "Preparación temporada lluvias + Simulacro emergencias",
          date: "12-23 Ago"
        },
        {
          area: "Agua",
          task: "Estudio afluentes 13-14 + Control contaminación",
          date: "19-30 Ago"
        }
      ]
    },
    september: {
      title: "Septiembre",
      tasks: [
        {
          area: "Ruido",
          task: "Trabajo con empresas + Actualización normativa",
          date: "2-13 Sep"
        },
        {
          area: "Agua",
          task: "Estudio afluentes 15-16 + Evaluación impacto",
          date: "16-27 Sep"
        },
        {
          area: "Física",
          task: "Evaluación desastres naturales + Plan prevención",
          date: "23-30 Sep"
        }
      ]
    },
    october: {
      title: "Octubre",
      tasks: [
        {
          area: "Eléctrica",
          task: "Análisis facturas comunidad + Informe equidad",
          date: "1-11 Oct"
        },
        {
          area: "Agua",
          task: "Estudio afluentes 17-18 + Tercera capacitación",
          date: "14-25 Oct"
        },
        {
          area: "Acceso",
          task: "Preparación época lluvias + Mantenimiento preventivo",
          date: "21-31 Oct"
        }
      ]
    },
    november: {
      title: "Noviembre",
      tasks: [
        {
          area: "Física",
          task: "Actualización mapas riesgo + Evaluación anual",
          date: "4-15 Nov"
        },
        {
          area: "Agua",
          task: "Estudio afluentes 19-20 + Análisis tendencias",
          date: "11-22 Nov"
        },
        {
          area: "Ruido",
          task: "Evaluación anual + Planificación mejoras 2026",
          date: "18-29 Nov"
        }
      ]
    },
    december: {
      title: "Diciembre",
      tasks: [
        {
          area: "Agua",
          task: "Estudio afluentes 21-24 + Informe anual",
          date: "2-13 Dic"
        },
        {
          area: "General",
          task: "Evaluación 52 problemas mejorados en el año",
          date: "9-20 Dic"
        },
        {
          area: "General",
          task: "Plan 2026 + Reunión comunidad",
          date: "16-27 Dic"
        }
      ]
    }
  };

  const areaColors: Record<string, string> = {
    "Acceso": "bg-blue-50 text-blue-700 border-blue-200 hover:bg-blue-100",
    "Access": "bg-blue-50 text-blue-700 border-blue-200 hover:bg-blue-100",
    "Agua": "bg-cyan-50 text-cyan-700 border-cyan-200 hover:bg-cyan-100",
    "Water": "bg-cyan-50 text-cyan-700 border-cyan-200 hover:bg-cyan-100",
    "Eléctrica": "bg-amber-50 text-amber-700 border-amber-200 hover:bg-amber-100",
    "Electrical": "bg-amber-50 text-amber-700 border-amber-200 hover:bg-amber-100",
    "Física": "bg-emerald-50 text-emerald-700 border-emerald-200 hover:bg-emerald-100",
    "Physical": "bg-emerald-50 text-emerald-700 border-emerald-200 hover:bg-emerald-100",
    "Ruido": "bg-purple-50 text-purple-700 border-purple-200 hover:bg-purple-100",
    "Noise": "bg-purple-50 text-purple-700 border-purple-200 hover:bg-purple-100",
    "General": "bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100"
  };

  const generateCalendarData = () => {
    const months = [
      { name: 'Febrero', days: 28 },
      { name: 'Marzo', days: 31 },
      { name: 'Abril', days: 30 },
      { name: 'Mayo', days: 31 },
      { name: 'Junio', days: 30 },
      { name: 'Julio', days: 31 },
      { name: 'Agosto', days: 31 },
      { name: 'Septiembre', days: 30 },
      { name: 'Octubre', days: 31 },
      { name: 'Noviembre', days: 30 },
      { name: 'Diciembre', days: 31 }
    ];
  
    return months.map(month => {
      const calendarDays: CalendarDay[] = Array.from({ length: month.days }, (_, i) => ({
        date: i + 1,
        activities: []
    }));

    const monthActivities = activities[month.name.toLowerCase()];
    if (monthActivities) {
      monthActivities.tasks.forEach(task => {
        const dateRange = task.date.split('-');
        const startDay = parseInt(dateRange[0]);
        const endDay = parseInt(dateRange[1]);
        
        for (let day = startDay; day <= endDay; day++) {
          if (calendarDays[day - 1]) {
            calendarDays[day - 1].activities.push({
              area: task.area,
              task: task.task
            });
          }
        }
      });
    }

    return {
        name: month.name,
        days: calendarDays
      };
    });
  };
  
  const [todos, setTodos] = useState<TodoItem[]>(() => {
    // Generate todos from translations based on current language
    const initialTodos: TodoItem[] = [];
    Object.entries(t.areas).forEach(([key, area]) => {
      area.keyPoints.forEach((point, index) => {
        initialTodos.push({
          id: `${key}-${index}`,
          area: key,
          task: point,
          isCompleted: false,
          category: area.title
        });
      });
    });
    return initialTodos;
  });

  useEffect(() => {
    setTodos(currentTodos => {
      const newTodos: TodoItem[] = [];
      Object.entries(t.areas).forEach(([key, area]) => {
        area.keyPoints.forEach((point, index) => {
          const existingTodo = currentTodos.find(todo => todo.id === `${key}-${index}`);
          newTodos.push({
            id: `${key}-${index}`,
            area: key,
            task: point,
            isCompleted: existingTodo ? existingTodo.isCompleted : false,
            category: area.title
          });
        });
      });
      return newTodos;
    });
  }, [language, t.areas]);

  const toggleTodo = (id: string) => {
    setTodos(currentTodos =>
      currentTodos.map(todo =>
        todo.id === id ? { ...todo, isCompleted: !todo.isCompleted } : todo
      )
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-emerald-50 via-white to-emerald-50 py-8">
      <div className="max-w-7xl mx-auto p-6">
        <div className="bg-white/90 backdrop-blur-sm rounded-xl shadow-xl p-8 border border-emerald-100">
          <LanguageSwitcher />
          {/* Header section */}
          <div className="flex flex-col items-center mb-12">
            <div className="w-48 h-48 relative mb-6">
              <Image
                src="/CococuFoundationLogo.png"
                alt="COCOCU Foundation Logo"
                width={192}
                height={192}
                className="object-contain"
                priority
              />
            </div>
            <h1 className="text-4xl font-bold mb-4 text-emerald-800 text-center">
              {t.title}
            </h1>
            <h2 className="text-2xl text-emerald-600 text-center">
              {t.subtitle}
            </h2>
            <p className="mt-4 text-gray-600 max-w-2xl text-center">
              {t.description}
            </p>
          </div>
  
          {/* Tabs section */}
          <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 mb-12 justify-center">
            <button
              className={`px-6 py-3 rounded-lg transition-all duration-200 font-semibold w-full sm:w-auto ${
                selectedTab === 'objectives' 
                  ? 'bg-emerald-600 text-white shadow-md' 
                  : 'bg-emerald-50 text-emerald-700 hover:bg-emerald-100'
              }`}
              onClick={() => setSelectedTab('objectives')}
            >
              {t.tabs.objectives}
            </button>
            <button
              className={`px-6 py-3 rounded-lg transition-all duration-200 font-semibold w-full sm:w-auto ${
                selectedTab === 'calendar' 
                  ? 'bg-emerald-600 text-white shadow-md' 
                  : 'bg-emerald-50 text-emerald-700 hover:bg-emerald-100'
              }`}
              onClick={() => setSelectedTab('calendar')}
            >
              {t.tabs.calendar}
            </button>
            <button
              className={`px-6 py-3 rounded-lg transition-all duration-200 font-semibold w-full sm:w-auto ${
                selectedTab === 'todo' 
                  ? 'bg-emerald-600 text-white shadow-md' 
                  : 'bg-emerald-50 text-emerald-700 hover:bg-emerald-100'
              }`}
              onClick={() => setSelectedTab('todo')}
            >
              {t.tabs.todo}
            </button>
          </div>
  
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-64 h-64 -z-10">
            <svg className="w-full h-full text-emerald-100 opacity-50" viewBox="0 0 100 100">
              <path d="M0,0 L100,0 L100,100 L0,0" fill="currentColor"/>
            </svg>
          </div>
  
          {/* Content sections */}
          {selectedTab === 'objectives' ? (
            <div className="grid gap-8 mt-8">
              {Object.entries(t.areas).map(([key, area]) => (
                <div 
                  key={key} 
                  className={`p-6 rounded-xl ${areaColors[key]} border shadow-sm hover:shadow-md transition-all duration-200`}
                >
                  <h3 className="text-2xl font-bold mb-3">{area.title}</h3>
                  <p className="mb-5 text-gray-700 leading-relaxed">{area.objective}</p>
                  <ul className="list-disc pl-6 space-y-3">
                    {area.keyPoints.map((point, index) => (
                      <li key={index} className="text-gray-700">{point}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          ) : selectedTab === 'todo' ? (
            <div className="space-y-8 mt-8">
              {Object.entries(t.areas).map(([key, area]) => (
                <div 
                  key={key} 
                  className={`p-6 rounded-xl border shadow-sm ${areaColors[key]}`}
                >
                  <h3 className="text-xl font-bold mb-4">{area.title}</h3>
                  <div className="space-y-3">
                    {todos
                      .filter(todo => todo.area === key)
                      .map(todo => (
                        <div 
                          key={todo.id} 
                          className={`flex items-start space-x-3 p-3 rounded-lg bg-white bg-opacity-80 transition-all duration-200 ${
                            todo.isCompleted ? 'bg-gray-50' : ''
                          }`}
                        >
                          <div className="pt-1">
                            <input
                              type="checkbox"
                              checked={todo.isCompleted}
                              onChange={() => toggleTodo(todo.id)}
                              className="w-4 h-4 rounded border-gray-300 text-emerald-600 focus:ring-emerald-500"
                            />
                          </div>
                          <div className={`flex-1 ${todo.isCompleted ? 'text-gray-500 line-through' : 'text-gray-700'}`}>
                            {todo.task}
                          </div>
                          <div className="text-sm text-gray-500 font-medium">
                            {todo.isCompleted ? t.todo.completed : t.todo.pending}
                          </div>
                        </div>
                      ))}
                  </div>
                  <div className="mt-4 text-sm text-gray-600">
                    {`${todos.filter(t => t.area === key && t.isCompleted).length} ${t.todo.of} ${
                      todos.filter(t => t.area === key).length
                    } ${t.todo.tasksCompleted}`}
                  </div>
                </div>
              ))}
              <div className="mt-6 p-4 bg-gray-50 rounded-lg">
                <h4 className="font-semibold mb-2">{t.todo.progress}</h4>
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                  <div 
                    className="bg-blue-600 h-2.5 rounded-full transition-all duration-300"
                    style={{ 
                      width: `${(todos.filter(t => t.isCompleted).length / todos.length) * 100}%` 
                    }}
                  ></div>
                </div>
                <div className="text-sm text-gray-600 mt-2">
                  {`${todos.filter(t => t.isCompleted).length} ${t.todo.of} ${todos.length} ${t.todo.tasksCompleted} (${
                    Math.round((todos.filter(t => t.isCompleted).length / todos.length) * 100)
                  }%)`}
                </div>
              </div>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
              {Object.entries(activities).map(([key, month]) => (
                <div 
                  key={key} 
                  className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-200 border border-gray-100"
                >
                  <h3 className="font-bold mb-4 text-xl text-gray-800">
                    {t.calendar.months[key]}
                  </h3>
                  <div className="space-y-4">
                    {month.tasks.map((task, index) => (
                      <div 
                        key={index} 
                        className={`p-4 rounded-lg ${areaColors[task.area]} border transition-all duration-200`}
                      >
                        <div className="font-semibold text-sm uppercase tracking-wide mb-1">
                          {t.areas[task.area]?.title || task.area}
                        </div>
                        <div className="mt-1 text-gray-700">
                          {language === 'es' 
                            ? task.task 
                            : t.tasks[task.area][task.task] || task.task
                          }
                        </div>
                        <div className="text-sm mt-3 text-gray-500 font-medium">
                          {task.date}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );}
  export default StrategicPlan;