import React, { useState, useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

interface DatepickerProps {
  value?: Date | null;
  onChange?: (date: Date | null) => void;
  placeholder?: string;
  className?: string;
}

interface CalendarDay {
  date: Date;
  otherMonth: boolean;
}

const Datepicker: React.FC<DatepickerProps> = ({
  value,
  onChange,
  placeholder = "Select date",
  className = "",
}) => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(value || null);
  const [showCalendar, setShowCalendar] = useState(false);
  const [currentMonth, setCurrentMonth] = useState(new Date().getMonth());
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());
  const containerRef = useRef<HTMLDivElement>(null);

  const weekdays = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];

  const formattedDate = selectedDate ? selectedDate.toLocaleDateString() : "";

  const daysInMonth = (year: number, month: number): number => {
    return new Date(year, month + 1, 0).getDate();
  };

  const calendarDays: CalendarDay[] = React.useMemo(() => {
    const days: CalendarDay[] = [];
    const firstDayOfWeek = new Date(currentYear, currentMonth, 1).getDay();

    // Previous month days
    const prevMonthDays = daysInMonth(currentYear, currentMonth - 1);
    for (let i = firstDayOfWeek - 1; i >= 0; i--) {
      days.push({
        date: new Date(currentYear, currentMonth - 1, prevMonthDays - i),
        otherMonth: true,
      });
    }

    // Current month days
    const thisMonthDays = daysInMonth(currentYear, currentMonth);
    for (let i = 1; i <= thisMonthDays; i++) {
      days.push({
        date: new Date(currentYear, currentMonth, i),
        otherMonth: false,
      });
    }

    // Next month days (fill to 6 weeks grid)
    const nextDays = 42 - days.length;
    for (let i = 1; i <= nextDays; i++) {
      days.push({
        date: new Date(currentYear, currentMonth + 1, i),
        otherMonth: true,
      });
    }

    return days;
  }, [currentMonth, currentYear]);

  const currentMonthName = new Date(currentYear, currentMonth).toLocaleString(
    "default",
    { month: "long" }
  );

  const toggleCalendar = () => setShowCalendar(!showCalendar);

  const prevMonth = () => {
    if (currentMonth === 0) {
      setCurrentMonth(11);
      setCurrentYear(currentYear - 1);
    } else {
      setCurrentMonth(currentMonth - 1);
    }
  };

  const nextMonth = () => {
    if (currentMonth === 11) {
      setCurrentMonth(0);
      setCurrentYear(currentYear + 1);
    } else {
      setCurrentMonth(currentMonth + 1);
    }
  };

  const selectDate = (day: CalendarDay) => {
    if (day.otherMonth) return;
    setSelectedDate(day.date);
    setShowCalendar(false);
    onChange?.(day.date);
  };

  const isSelected = (day: CalendarDay): boolean => {
    return (
      selectedDate !== null &&
      day.date.toDateString() === selectedDate.toDateString()
    );
  };

  // Close calendar when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setShowCalendar(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Update internal state when value prop changes
  useEffect(() => {
    setSelectedDate(value || null);
  }, [value]);

  return (
    <div className={cn("relative inline-block", className)} ref={containerRef}>
      <input
        type="text"
        readOnly
        value={formattedDate}
        onClick={toggleCalendar}
        placeholder={placeholder}
        className={cn(
          "p-2 border border-gray-300 rounded cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-500",
          className.includes("w-full") ? "w-full" : "w-40"
        )}
      />
      {showCalendar && (
        <div className="absolute top-full left-0 mt-2 bg-white border border-gray-300 rounded shadow-lg z-50 p-4">
          {/* Header */}
          <div className="flex justify-between items-center mb-2">
            <button
              onClick={prevMonth}
              className="p-1 hover:bg-gray-200 rounded"
              type="button"
            >
              &lt;
            </button>
            <span className="font-medium">
              {currentMonthName} {currentYear}
            </span>
            <button
              onClick={nextMonth}
              className="p-1 hover:bg-gray-200 rounded"
              type="button"
            >
              &gt;
            </button>
          </div>

          {/* Weekdays */}
          <div className="grid grid-cols-7 text-center mb-1">
            {weekdays.map((day) => (
              <span key={day} className="font-semibold text-gray-700 text-sm">
                {day}
              </span>
            ))}
          </div>

          {/* Days */}
          <div className="grid grid-cols-7 text-center">
            {calendarDays.map((day, index) => (
              <span
                key={`${day.date.getTime()}-${index}`}
                onClick={() => selectDate(day)}
                className={cn("p-2 cursor-pointer rounded-full text-sm", {
                  "text-gray-400": day.otherMonth,
                  "bg-blue-500 text-white": isSelected(day),
                  "hover:bg-blue-100": !day.otherMonth && !isSelected(day),
                })}
              >
                {day.date.getDate()}
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Datepicker;
