/**
 * SARV HABIT — Premium Mindful Habit Tracker
 * Founder: Sarvinoz (Sarah)
 * Technology: Vanilla HTML5, CSS3, ES6+ JavaScript
 */

// ============================================================
// 1. FULL TRILINGUAL i18n LOCALIZATION DICTIONARY (UZ, EN, RU)
// ============================================================
const i18n = {
  uz: {
    // Nav
    nav_dashboard: "Bosh sahifa",
    nav_habits: "Odatlar",
    nav_timer: "Fokus Taymer",
    nav_progress: "Tahlil va Xarita",
    nav_calendar: "Taqvim",
    nav_journey: "Rivojlanish va Yutuqlar",
    nav_notes: "Haftalik Mulohaza",
    nav_mood: "Kayfiyat",
    nav_ai: "AI Murabbiy",
    nav_settings: "Sozlamalar",
    sidebar_streak_label: "Davomiylik (Streak)",

    // Header & Greeting
    greeting_morning: "Xayrli tong",
    greeting_afternoon: "Xayrli kun",
    greeting_evening: "Xayrli oqshom",
    founder_badge: "👑 Asoschi",
    add_habit_btn: "+ Odat qo'shish",

    // Daily Focus
    daily_focus_tag: "BUGUNGI ASOSIY FOKUS",
    default_focus_intention: "10 000 qadam yurish, to'yib suv ichish va diqqatni jamlash",
    btn_mark_focused: "Bajarildi",
    btn_focus_completed: "Bajarildi ✨",

    // Dashboard Cards
    card_daily_balance: "KUNLIK BALANS",
    filter_today: "Bugun",
    badge_mind: "Aql",
    badge_body: "Tana",
    badge_energy: "Energiya",
    card_todays_goals: "BUGUNGI MAQSADLAR",
    btn_unlock_reward: "Mukofotni ochish",
    card_calendar: "TAQVIM",
    card_activity: "FAOLIK",
    label_steps: "qadam",
    trend_label: "Trend:",
    card_water_rate: "SUV ME'YORI",
    label_glasses: "Stakanlar:",
    label_streaks: "Davomiylik:",
    card_meditation: "MEDITATSIYA",
    label_today_result: "Bugungi natija:",
    card_sleep_quality: "UYQU SIFATI",
    label_well_rested: "To'yib dam olindi",
    card_heatmap_title: "ODATLAR FAOLLIK XARITASI (OXIRGI 60 KUN)",
    heatmap_consistency: "Muntazamlik",

    // Focus Timer
    timer_title: "Fokus Taymer & Pomodoro",
    timer_desc: "Chuqur diqqat bilan ishlash va nafas mashqlari uchun maxsus lavanda taymeri.",
    timer_mode_focus: "25 daqiqa Fokus",
    timer_mode_short: "5 daqiqa Tanaffus",
    timer_mode_long: "15 daqiqa Meditatsiya",
    timer_state_ready: "Diqqatni jamlang",
    timer_state_running: "Chuqur diqqatda...",
    timer_state_paused: "To'xtatildi",
    timer_state_done: "Ajoyib natija! ✨",
    timer_btn_start: "Boshlash",
    timer_btn_pause: "To'xtatish",
    timer_btn_reset: "Qayta o'rnatish",
    timer_today_title: "Bugungi Fokus Statistikasi",
    timer_sessions_count: "Tugallangan seanslar:",
    timer_total_minutes: "Umumiy chuqur diqqat vaqti:",
    timer_xp_earned: "Ortirilgan tajriba (XP):",

    // Habits Management
    habits_management_title: "Odatlar boshqaruvi",
    habits_management_desc: "Kunlik tartibingizni yarating, sozlang va doimiy kuzatib boring.",
    create_habit_action: "+ Odat yaratish",
    filter_all: "Barchasi",
    filter_completed: "Bajarilganlar",
    freq_daily: "Har kuni",
    freq_weekdays: "Ish kunlari",
    freq_weekends: "Dam olish kunlari",

    // Analytics
    analytics_title: "Statistika va Tahlil",
    analytics_desc: "Odatlar bajarilishi, umumiy progress va davomiylik ko'rsatkichlari.",
    period_week: "Shu hafta",
    period_month: "Shu oy",
    overall_rate_label: "Umumiy bajarilish",
    current_streak_label: "Joriy davomiylik",
    total_completed_label: "Bajarilgan odatlar",
    balance_score_label: "Muvozanat indeksi",
    badge_vs_last_week: "+8% o'tgan haftaga nisbatan",
    badge_personal_best: "Shaxsiy rekord: 24 Kun",
    badge_30_days: "30 kun davomida",
    badge_optimal_harmony: "Mukammal uyg'unlik",
    chart_weekly_activity: "Haftalik odatlar faolligi",
    chart_legend_daily: "Kunlik foiz %",
    chart_category_split: "Yo'nalishlar taqsimoti",

    // Calendar
    full_calendar_title: "Interaktiv Taqvim",
    full_calendar_desc: "Oylik bajarilish tarixini ko'ring va istalgan kunga bosib ma'lumot oling.",

    // Growth Journey & Achievements
    journey_title: "Shaxsiy Rivojlanish va Yutuqlar",
    journey_desc: "Har bir bajarilgan odat uchun XP to'plang va yangi cho'qqilarni zabt eting.",
    journey_current_level: "Joriy Bosqich:",
    journey_total_xp: "To'plangan tajriba:",
    achievements_heading: "Yutuqlar va medallar",
    badge_unlocked: "Ochildi ✓",
    badge_locked: "Qulflangan 🔒",

    // Daily Notes & Reflection
    daily_notes_title: "Haftalik Mulohaza va Qaydlar",
    daily_notes_desc: "Har haftalik yutuqlaringiz, xulosalaringiz va minnatdorliklaringizni yozib boring.",
    new_note_action: "+ Yangi qayd",
    composer_title: "Mulohaza yozish",
    note_tag_label: "Yo'nalish:",
    btn_save_note: "Qaydni saqlash",

    // Mood Tracker
    mood_tracker_title: "Kayfiyat va Hayotiylik",
    mood_tracker_desc: "Kayfiyatingizni qayd qiling va qaysi odatlar sizga quvonch keltirishini biling.",
    how_feeling_today: "Hozir o'zingizni qanday his qilyapsiz?",
    select_mood_subtitle: "Joriy ruhiy holatingizni tanlang",
    mood_radiant: "A'lo",
    mood_calm: "Xotirjam",
    mood_balanced: "Muvozanatli",
    mood_tired: "Charchagan",
    mood_stressed: "Zo'riqqan",
    energy_level_label: "Energiya darajasi:",
    log_mood_action: "Kayfiyatni saqlash",
    mood_history_title: "So'nggi kayfiyatlar tarixi",

    // AI Coach
    ai_assistant_title: "SARV AI Murabbiyi",
    ai_assistant_desc: "Odatlaringizni tahlil qilib, amaliy tavsiyalar beruvchi aqlli yordamchi.",
    btn_ai_audit: "To'liq odatlar auditini o'tkazish",
    chip_audit: "📊 Odatlarim muvozanati qanday?",
    chip_motivation: "✨ Menga ilhom baxsh etuvchi fikr ayt",
    chip_sleep: "🌙 Uyqu sifatini qanday yaxshilash mumkin?",
    chip_newhabit: "🌱 Yangi ertalabki odat tavsiya qil",

    // Settings
    settings_title: "Profil va Sozlamalar",
    settings_desc: "Foydalanuvchi ma'lumotlari, til, mavzu va kunlik maqsadlarni boshqarish.",
    profile_details_title: "Foydalanuvchi profili",
    user_name_label: "Ismingiz",
    daily_mantra_label: "Kunlik shior / Bio",
    btn_save_changes: "Profilni saqlash",
    daily_targets_title: "Kunlik Salomatlik Maqsadlari",
    target_steps: "Kunlik qadamlar maqsadi:",
    target_water: "Suv ichish maqsadi (stakan):",
    target_sleep: "Uyqu vaqti maqsadi (soat):",
    target_meditation: "Meditatsiya maqsadi (daq):",
    btn_save_targets: "Maqsadlarni yangilash",
    app_preferences_title: "Ilova Sozlamalari",
    app_language_label: "Til / Language / Язык",
    app_language_desc: "Ilova interfeysi tilini tanlang.",
    theme_mode_label: "Mavzu ko'rinishi",
    theme_mode_desc: "Yorug' va qorong'u (tungi) rejim o'rtasida almashish.",
    data_management_title: "Ma'lumotlar va Xavfsizlik",
    data_management_desc: "Barcha ma'lumotlar faqat sizning brauzeringizda xavfsiz saqlanadi.",
    btn_export_json: "Eksport (JSON)",
    btn_import_json: "Import qilish",
    btn_reset_defaults: "Boshlang'ich holatga qaytarish",

    // Modals
    modal_add_habit_title: "Yangi odat qo'shish",
    habit_name_label: "Odat nomi *",
    habit_pillar_label: "Yo'nalish / Kategoriya",
    habit_frequency_label: "Takroriylik",
    habit_icon_label: "Belgi",
    habit_time_label: "Qulay vaqt",
    time_morning: "Ertalab",
    time_afternoon: "Tushdan keyin",
    time_evening: "Kechqurun",
    time_anytime: "Ixtiyoriy vaqt",
    btn_cancel: "Bekor qilish",
    btn_save_habit: "Saqlash",
    reward_congrats_title: "Tabriklaymiz, Sarvinoz!",
    btn_awesome: "Olg'a davom etamiz",
    auth_modal_title: "Asoschi va Profillar"
  },

  en: {
    // Nav
    nav_dashboard: "Dashboard",
    nav_habits: "Habits",
    nav_timer: "Focus Timer",
    nav_progress: "Progress & Map",
    nav_calendar: "Calendar",
    nav_journey: "Journey & Growth",
    nav_notes: "Weekly Reflection",
    nav_mood: "Mood Tracker",
    nav_ai: "AI Coach",
    nav_settings: "Settings",
    sidebar_streak_label: "Current Streak",

    // Header & Greeting
    greeting_morning: "Good morning",
    greeting_afternoon: "Good afternoon",
    greeting_evening: "Good evening",
    founder_badge: "👑 Founder",
    add_habit_btn: "+ Add habit",

    // Daily Focus
    daily_focus_tag: "DAILY MAIN FOCUS",
    default_focus_intention: "Walk 10,000 steps, stay hydrated and practice mindfulness",
    btn_mark_focused: "Complete",
    btn_focus_completed: "Completed ✨",

    // Dashboard Cards
    card_daily_balance: "DAILY BALANCE",
    filter_today: "Today",
    badge_mind: "Mind",
    badge_body: "Body",
    badge_energy: "Energy",
    card_todays_goals: "TODAY'S GOALS",
    btn_unlock_reward: "Unlock reward",
    card_calendar: "CALENDAR",
    card_activity: "ACTIVITY",
    label_steps: "steps",
    trend_label: "Trend:",
    card_water_rate: "WATER RATE",
    label_glasses: "Glasses:",
    label_streaks: "Streaks:",
    card_meditation: "MEDITATION",
    label_today_result: "Today result:",
    card_sleep_quality: "SLEEP QUALITY",
    label_well_rested: "Well rested",
    card_heatmap_title: "HABIT ACTIVITY HEATMAP (PAST 60 DAYS)",
    heatmap_consistency: "Consistency",

    // Focus Timer
    timer_title: "Focus Timer & Pomodoro",
    timer_desc: "Mindful lavender countdown timer designed for deep work and breathing pauses.",
    timer_mode_focus: "25 min Focus",
    timer_mode_short: "5 min Break",
    timer_mode_long: "15 min Meditation",
    timer_state_ready: "Center your focus",
    timer_state_running: "Deep focus in progress...",
    timer_state_paused: "Paused",
    timer_state_done: "Well done! ✨",
    timer_btn_start: "Start",
    timer_btn_pause: "Pause",
    timer_btn_reset: "Reset",
    timer_today_title: "Today's Focus Statistics",
    timer_sessions_count: "Completed sessions:",
    timer_total_minutes: "Total deep work time:",
    timer_xp_earned: "Earned experience (XP):",

    // Habits Management
    habits_management_title: "Habit Management",
    habits_management_desc: "Create, customize, organize, and monitor all your daily routines.",
    create_habit_action: "+ Create Habit",
    filter_all: "All",
    filter_completed: "Completed",
    freq_daily: "Every Day",
    freq_weekdays: "Weekdays",
    freq_weekends: "Weekends",

    // Analytics
    analytics_title: "Analytics & Insights",
    analytics_desc: "Comprehensive progress metrics, streaks, and completion trends.",
    period_week: "This Week",
    period_month: "This Month",
    overall_rate_label: "Overall Completion",
    current_streak_label: "Current Streak",
    total_completed_label: "Total Habits Done",
    balance_score_label: "Mindful Balance Score",
    badge_vs_last_week: "+8% vs last week",
    badge_personal_best: "Personal best: 24 Days",
    badge_30_days: "Across 30 days",
    badge_optimal_harmony: "Optimal Harmony",
    chart_weekly_activity: "Weekly Habit Completion",
    chart_legend_daily: "Daily % Rate",
    chart_category_split: "Pillar Distribution",

    // Calendar
    full_calendar_title: "Interactive Calendar",
    full_calendar_desc: "Browse habit consistency across months and click any day to inspect details.",

    // Growth Journey & Achievements
    journey_title: "Personal Growth & Achievements",
    journey_desc: "Accumulate mindful XP with every completed habit and reach new stages of life.",
    journey_current_level: "Current Level:",
    journey_total_xp: "Total Experience:",
    achievements_heading: "Badges & Achievements",
    badge_unlocked: "Unlocked ✓",
    badge_locked: "Locked 🔒",

    // Daily Notes & Reflection
    daily_notes_title: "Weekly Reflection & Notes",
    daily_notes_desc: "Reflect on your weekly achievements, insights, gratitude, and intentions.",
    new_note_action: "+ New Note",
    composer_title: "Write Reflection",
    note_tag_label: "Pillar:",
    btn_save_note: "Save Reflection",

    // Mood Tracker
    mood_tracker_title: "Mood & Vitality Tracker",
    mood_tracker_desc: "Record how you feel daily to identify which habits enhance your happiness.",
    how_feeling_today: "How are you feeling right now?",
    select_mood_subtitle: "Tap your current state of mind",
    mood_radiant: "Radiant",
    mood_calm: "Calm",
    mood_balanced: "Balanced",
    mood_tired: "Tired",
    mood_stressed: "Stressed",
    energy_level_label: "Energy Level:",
    log_mood_action: "Log Mood",
    mood_history_title: "Recent Mood History",

    // AI Coach
    ai_assistant_title: "SARV AI Habit Coach",
    ai_assistant_desc: "Rule-based mindful intelligence that analyzes your real habits to provide custom coaching.",
    btn_ai_audit: "Run Full Habit Audit",
    chip_audit: "📊 How is my habit balance this week?",
    chip_motivation: "✨ Give me motivational advice",
    chip_sleep: "🌙 How can I improve my sleep routine?",
    chip_newhabit: "🌱 Suggest a morning routine",

    // Settings
    settings_title: "Profile & Preferences",
    settings_desc: "Manage your profile, language, theme, daily targets, and application data.",
    profile_details_title: "User Profile",
    user_name_label: "Display Name",
    daily_mantra_label: "Mindful Mantra / Bio",
    btn_save_changes: "Save Profile",
    daily_targets_title: "Daily Health Targets",
    target_steps: "Daily Steps Goal:",
    target_water: "Water Glasses Goal:",
    target_sleep: "Sleep Hours Goal:",
    target_meditation: "Meditation Goal (min):",
    btn_save_targets: "Update Targets",
    app_preferences_title: "Application Preferences",
    app_language_label: "Language / Til / Язык",
    app_language_desc: "Select your preferred user interface language.",
    theme_mode_label: "Appearance Mode",
    theme_mode_desc: "Switch between clean daylight and luminous night theme.",
    data_management_title: "Data & Privacy",
    data_management_desc: "All your habits, notes, and mood logs are safely stored in your browser's localStorage.",
    btn_export_json: "Export Data (JSON)",
    btn_import_json: "Import Backup",
    btn_reset_defaults: "Reset to Defaults",

    // Modals
    modal_add_habit_title: "Add New Habit",
    habit_name_label: "Habit Name *",
    habit_pillar_label: "Pillar / Category",
    habit_frequency_label: "Frequency",
    habit_icon_label: "Icon",
    habit_time_label: "Preferred Time",
    time_morning: "Morning",
    time_afternoon: "Afternoon",
    time_evening: "Evening",
    time_anytime: "Anytime",
    btn_cancel: "Cancel",
    btn_save_habit: "Save",
    reward_congrats_title: "Congratulations, Sarah!",
    btn_awesome: "Keep Going",
    auth_modal_title: "Founder & Profiles"
  },

  ru: {
    // Nav
    nav_dashboard: "Панель",
    nav_habits: "Привычки",
    nav_timer: "Таймер Фокуса",
    nav_progress: "Анализ и Карта",
    nav_calendar: "Календарь",
    nav_journey: "Рост и Достижения",
    nav_notes: "Еженедельный отчет",
    nav_mood: "Настроение",
    nav_ai: "AI Наставник",
    nav_settings: "Настройки",
    sidebar_streak_label: "Текущая серия",

    // Header & Greeting
    greeting_morning: "Доброе утро",
    greeting_afternoon: "Добрый день",
    greeting_evening: "Добрый вечер",
    founder_badge: "👑 Основатель",
    add_habit_btn: "+ Добавить",

    // Daily Focus
    daily_focus_tag: "ГЛАВНЫЙ ФОКУС ДНЯ",
    default_focus_intention: "Пройти 10 000 шагов, выпить 10 стаканов воды и сохранять фокус",
    btn_mark_focused: "Выполнить",
    btn_focus_completed: "Выполнено ✨",

    // Dashboard Cards
    card_daily_balance: "ДНЕВНОЙ БАЛАНС",
    filter_today: "Сегодня",
    badge_mind: "Разум",
    badge_body: "Тело",
    badge_energy: "Энергия",
    card_todays_goals: "ЦЕЛИ НА СЕГОДНЯ",
    btn_unlock_reward: "Разблокировать награду",
    card_calendar: "КАЛЕНДАРЬ",
    card_activity: "АКТИВНОСТЬ",
    label_steps: "шагов",
    trend_label: "Тренд:",
    card_water_rate: "НОРМА ВОДЫ",
    label_glasses: "Стаканы:",
    label_streaks: "Серия:",
    card_meditation: "МЕДИТАЦИЯ",
    label_today_result: "Результат за день:",
    card_sleep_quality: "КАЧЕСТВО СНА",
    label_well_rested: "Отличный отдых",
    card_heatmap_title: "ТЕПЛОВАЯ КАРТА АКТИВНОСТИ (60 ДНЕЙ)",
    heatmap_consistency: "Регулярность",

    // Focus Timer
    timer_title: "Таймер Фокуса & Помодоро",
    timer_desc: "Лавандовый таймер для глубокой концентрации и дыхательных пауз.",
    timer_mode_focus: "25 мин Фокус",
    timer_mode_short: "5 мин Отдых",
    timer_mode_long: "15 мин Медитация",
    timer_state_ready: "Сосредоточьтесь",
    timer_state_running: "Глубокая концентрация...",
    timer_state_paused: "Пауза",
    timer_state_done: "Отличная работа! ✨",
    timer_btn_start: "Начать",
    timer_btn_pause: "Пауза",
    timer_btn_reset: "Сбросить",
    timer_today_title: "Статистика фокуса за сегодня",
    timer_sessions_count: "Завершено сессий:",
    timer_total_minutes: "Время глубокого фокуса:",
    timer_xp_earned: "Полученный опыт (XP):",

    // Habits Management
    habits_management_title: "Управление привычками",
    habits_management_desc: "Создавайте, настраивайте и отслеживайте свои ежедневные ритуалы.",
    create_habit_action: "+ Создать привычку",
    filter_all: "Все",
    filter_completed: "Выполненные",
    freq_daily: "Каждый день",
    freq_weekdays: "Будние дни",
    freq_weekends: "Выходные дни",

    // Analytics
    analytics_title: "Аналитика и Прогресс",
    analytics_desc: "Подробная статистика выполнения, серии и тренды продуктивности.",
    period_week: "Эта неделя",
    period_month: "Этот месяц",
    overall_rate_label: "Общий процент",
    current_streak_label: "Текущая серия",
    total_completed_label: "Выполнено привычек",
    balance_score_label: "Индекс гармонии",
    badge_vs_last_week: "+8% к прошлой неделе",
    badge_personal_best: "Личный рекорд: 24 Дня",
    badge_30_days: "За 30 дней",
    badge_optimal_harmony: "Полная гармония",
    chart_weekly_activity: "Активность за неделю",
    chart_legend_daily: "Дневной %",
    chart_category_split: "Распределение по сферам",

    // Calendar
    full_calendar_title: "Интерактивный календарь",
    full_calendar_desc: "История выполнения привычек по месяцам с подробным просмотром по дням.",

    // Growth Journey & Achievements
    journey_title: "Личный Рост и Достижения",
    journey_desc: "Зарабатывайте осознанный опыт (XP) за каждую привычку и переходите на новые уровни.",
    journey_current_level: "Текущий уровень:",
    journey_total_xp: "Накопленный опыт:",
    achievements_heading: "Медали и достижения",
    badge_unlocked: "Открыто ✓",
    badge_locked: "Заблокировано 🔒",

    // Daily Notes & Reflection
    daily_notes_title: "Еженедельные размышления",
    daily_notes_desc: "Записывайте мысли, благодарности и победы каждого дня.",
    new_note_action: "+ Новая запись",
    composer_title: "Написать заметку",
    note_tag_label: "Сфера:",
    btn_save_note: "Сохранить запись",

    // Mood Tracker
    mood_tracker_title: "Трекер настроения",
    mood_tracker_desc: "Фиксируйте свое эмоциональное состояние и уровень жизненной энергии.",
    how_feeling_today: "Как вы себя чувствуете прямо сейчас?",
    select_mood_subtitle: "Выберите ваше текущее состояние",
    mood_radiant: "Превосходно",
    mood_calm: "Спокойно",
    mood_balanced: "В балансе",
    mood_tired: "Усталость",
    mood_stressed: "В стрессе",
    energy_level_label: "Уровень энергии:",
    log_mood_action: "Зафиксировать настроение",
    mood_history_title: "История настроения",

    // AI Coach
    ai_assistant_title: "SARV AI Наставник",
    ai_assistant_desc: "Умный помощник, анализирующий ваши реальные привычки и дающий персональные советы.",
    btn_ai_audit: "Провести полный аудит привычек",
    chip_audit: "📊 Как выглядит мой баланс на этой неделе?",
    chip_motivation: "✨ Дай мне мотивационный совет",
    chip_sleep: "🌙 Как улучшить качество сна?",
    chip_newhabit: "🌱 Посоветуй полезную утреннюю привычку",

    // Settings
    settings_title: "Профиль и Настройки",
    settings_desc: "Управление личными данными, языком, целями и резервным копированием.",
    profile_details_title: "Профиль пользователя",
    user_name_label: "Отображаемое имя",
    daily_mantra_label: "Девиз дня / О себе",
    btn_save_changes: "Сохранить профиль",
    daily_targets_title: "Ежедневные цели здоровья",
    target_steps: "Цель по шагам:",
    target_water: "Цель по воде (стаканы):",
    target_sleep: "Цель по сну (часы):",
    target_meditation: "Медитация (мин):",
    btn_save_targets: "Обновить цели",
    app_preferences_title: "Настройки приложения",
    app_language_label: "Язык интерфейса",
    app_language_desc: "Выберите предпочтительный язык приложения.",
    theme_mode_label: "Тема оформления",
    theme_mode_desc: "Переключение между дневной и ночной лавандовой темой.",
    data_management_title: "Данные и конфиденциальность",
    data_management_desc: "Все данные хранятся локально в вашем браузере (localStorage).",
    btn_export_json: "Экспорт в JSON",
    btn_import_json: "Импорт копии",
    btn_reset_defaults: "Сбросить до стандартных",

    // Modals
    modal_add_habit_title: "Новая привычка",
    habit_name_label: "Название привычки *",
    habit_pillar_label: "Сфера жизни",
    habit_frequency_label: "Частота",
    habit_icon_label: "Иконка",
    habit_time_label: "Удобное время",
    time_morning: "Утро",
    time_afternoon: "День",
    time_evening: "Вечер",
    time_anytime: "В любое время",
    btn_cancel: "Отмена",
    btn_save_habit: "Сохранить",
    reward_congrats_title: "Поздравляем, Сарвиноз!",
    btn_awesome: "Продолжить движение",
    auth_modal_title: "Основатель и Профили"
  }
};

// Date helper translations
const CALENDAR_I18N = {
  uz: {
    months: ["Yanvar", "Fevral", "Mart", "Aprel", "May", "Iyun", "Iyul", "Avgust", "Sentabr", "Oktabr", "Noyabr", "Dekabr"],
    weekdaysShort: ["Ya", "Du", "Se", "Ch", "Pa", "Ju", "Sh"],
    weekdaysFull: ["Yakshanba", "Dushanba", "Seshanba", "Chorshanba", "Payshanba", "Juma", "Shanba"]
  },
  en: {
    months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
    weekdaysShort: ["S", "M", "T", "W", "T", "F", "S"],
    weekdaysFull: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
  },
  ru: {
    months: ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"],
    monthsGenitive: ["января", "февраля", "марта", "апреля", "мая", "июня", "июля", "августа", "сентября", "октября", "ноября", "декабря"],
    weekdaysShort: ["Вс", "Пн", "Вт", "Ср", "Чт", "Пт", "Сб"],
    weekdaysFull: ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"]
  }
};

// Growth Levels Definition
const GROWTH_LEVELS = [
  {
    level: 1, minXp: 0, maxXp: 300, icon: "🌱",
    name_uz: "1-Bosqich: Nihol",
    name_en: "Level 1: Sprout",
    name_ru: "1 Уровень: Росток",
    desc_uz: "Siz yangi sog'lom hayot tarziga ilk qadamni qo'ydingiz. Har bir kichik odat muhim!",
    desc_en: "You have taken your first step towards a mindful lifestyle. Every small habit matters!",
    desc_ru: "Вы сделали первый шаг к осознанному образу жизни. Каждая маленькая привычка важна!"
  },
  {
    level: 2, minXp: 300, maxXp: 700, icon: "🌿",
    name_uz: "2-Bosqich: Maysazor",
    name_en: "Level 2: Meadow",
    name_ru: "2 Уровень: Зеленая поляна",
    desc_uz: "Odatlaringiz ildiz otdi va kunlik intizomingiz tobora mustahkamlanib bormoqda.",
    desc_en: "Your habits have taken deep root, bringing rhythm and vitality to every day.",
    desc_ru: "Ваши привычки укоренились, принося ритм и жизненную силу каждому дню."
  },
  {
    level: 3, minXp: 700, maxXp: 1200, icon: "🌸",
    name_uz: "3-Bosqich: Gullagan Lavanda",
    name_en: "Level 3: Blooming Lavender",
    name_ru: "3 Уровень: Цветущая Лаванда",
    desc_uz: "Siz intizom va xotirjamlik uyg'unligiga erishdingiz. Hayotingiz gullab-yashnamoqda.",
    desc_en: "You have mastered discipline and serenity in true harmony. Your life is blooming.",
    desc_ru: "Вы достигли гармонии дисциплины и внутреннего покоя. Ваша жизнь расцветает."
  },
  {
    level: 4, minXp: 1200, maxXp: 3000, icon: "🌲",
    name_uz: "4-Bosqich: Sarv Daraxti",
    name_en: "Level 4: Majestic Cypress",
    name_ru: "4 Уровень: Величественный Кипарис",
    desc_uz: "Mustahkam va mag'rur Sarv daraxtidek barqaror, hech narsa sizning intizomingizni buza olmaydi.",
    desc_en: "Unshakeable and proud like an evergreen Cypress, your mindful habits stand strong.",
    desc_ru: "Непоколебимый и величественный, как вечнозеленый Кипарис — ваша дисциплина безупречна."
  }
];

// Achievements Definition
const ACHIEVEMENTS_LIST = [
  {
    id: "early_bird", icon: "🌅",
    title_uz: "Ertalabki uyg'onish", title_en: "Early Riser", title_ru: "Ранняя пташка",
    desc_uz: "Ertalabki odatlarni 5 kun ketma-ket bajaring",
    desc_en: "Complete morning routines 5 days in a row",
    desc_ru: "Выполняйте утренние привычки 5 дней подряд",
    unlocked: true
  },
  {
    id: "water_master", icon: "💧",
    title_uz: "Gidratsiya ustasi", title_en: "Hydration Master", title_ru: "Мастер гидратации",
    desc_uz: "10 kun davomida kunlik 10 stakan suv iching",
    desc_en: "Drink 10 glasses of water for 10 days",
    desc_ru: "Выпивайте по 10 стаканов воды 10 дней подряд",
    unlocked: true
  },
  {
    id: "serenity", icon: "🧘",
    title_uz: "Chuqur xotirjamlik", title_en: "Deep Serenity", title_ru: "Глубокое спокойствие",
    desc_uz: "Umumiy 100 daqiqa meditatsiya bajaring",
    desc_en: "Accumulate 100 total minutes of meditation",
    desc_ru: "Накопите более 100 минут медитации",
    unlocked: true
  },
  {
    id: "step_hero", icon: "👣",
    title_uz: "10 000 Qadam", title_en: "10,000 Steps Hero", title_ru: "Герой 10 000 шагов",
    desc_uz: "Kunlik qadamlar maqsadini to'liq zabt eting",
    desc_en: "Reach or exceed your 10,000 steps goal",
    desc_ru: "Достигните цели в 10 000 шагов за день",
    unlocked: false
  },
  {
    id: "focus_guru", icon: "⏱️",
    title_uz: "Fokus qiroli", title_en: "Focus Champion", title_ru: "Чемпион концентрации",
    desc_uz: "Pomodoro taymerida 3 ta to'liq seansni bajaring",
    desc_en: "Complete 3 full Pomodoro focus sessions",
    desc_ru: "Завершите 3 полные сессии глубокого фокуса",
    unlocked: true
  },
  {
    id: "evergreen", icon: "🌲",
    title_uz: "Mustahkam Sarv", title_en: "Evergreen Sarv", title_ru: "Вечнозеленый Сарв",
    desc_uz: "21 kunlik uzluksiz odatlar seriyasiga erishing",
    desc_en: "Reach a continuous streak of 21 days",
    desc_ru: "Достигните непрерывной серии в 21 день",
    unlocked: false
  }
];

// Helper to generate simulated 60-day heatmap data
function generateInitialHeatmapData() {
  const days = [];
  const now = new Date();
  for (let i = 59; i >= 0; i--) {
    const d = new Date(now);
    d.setDate(d.getDate() - i);
    // realistic completion values: mostly 3 to 6 completions
    const base = ((i * 7 + 13) % 5) + 1;
    days.push({
      dateStr: d.toISOString().split("T")[0],
      count: base
    });
  }
  return days;
}

// ============================================================
// 2. DEFAULT STATE MATCHING REFERENCE AND REQUIREMENTS
// ============================================================
const nowInit = new Date();

const DEFAULT_STATE = {
  version: "2.0.0",
  lang: "uz", // default to Uzbek as requested by user
  theme: "light",
  user: {
    name: "Sarvinoz",
    alias: "Sarah",
    role: "SARV HABIT Asoschisi",
    mantra: "Bugun men xotirjamlik va rivojlanishni tanlayman",
    streakDays: 12,
    xp: 850,
    dailyFocusDone: false,
    dailyFocusText: ""
  },
  targets: {
    steps: 10000,
    water: 10,
    sleep: 8.0,
    meditation: 20
  },
  metrics: {
    stepsCurrent: 8567,
    waterGlassesCurrent: 6,
    waterStreakDays: 10,
    meditationMinutesCurrent: 20,
    sleepHoursCurrent: 7.33,
    sleepInterval: "23:00 – 06:20",
    sleepStatus: "well_rested"
  },
  habits: [
    {
      id: "h1",
      name: "10 daqiqa meditatsiya",
      name_uz: "10 daqiqa meditatsiya",
      name_en: "10 min meditation",
      name_ru: "10 минут медитации",
      pillar: "mind",
      frequency: "daily",
      timeOfDay: "morning",
      completed: true,
      streak: 12
    },
    {
      id: "h2",
      name: "10 stakan toza suv ichish",
      name_uz: "10 stakan toza suv ichish",
      name_en: "Drink 10 glasses of water",
      name_ru: "Выпить 10 стаканов воды",
      pillar: "body",
      frequency: "daily",
      timeOfDay: "anytime",
      completed: false,
      streak: 10
    },
    {
      id: "h3",
      name: "10 000 qadam yurish",
      name_uz: "10 000 qadam yurish",
      name_en: "Walk 10 000 steps",
      name_ru: "Пройти 10 000 шагов",
      pillar: "body",
      frequency: "daily",
      timeOfDay: "afternoon",
      completed: false,
      streak: 7
    },
    {
      id: "h4",
      name: "3 mahal to'yimli va sog'lom ovqatlanish",
      name_uz: "3 mahal to'yimli va sog'lom ovqatlanish",
      name_en: "Eat 3 healthy meals",
      name_ru: "3 здоровых приема пищи",
      pillar: "body",
      frequency: "daily",
      timeOfDay: "anytime",
      completed: true,
      streak: 14
    },
    {
      id: "h5",
      name: "7-8 soat chuqur uxlash",
      name_uz: "7-8 soat chuqur uxlash",
      name_en: "Sleep 7-8h",
      name_ru: "Сон 7-8 часов",
      pillar: "energy",
      frequency: "daily",
      timeOfDay: "evening",
      completed: true,
      streak: 9
    },
    {
      id: "h6",
      name: "Shakar va ortiqcha shirinlikni cheklash",
      name_uz: "Shakar va ortiqcha shirinlikni cheklash",
      name_en: "Limit sugar intake",
      name_ru: "Ограничить сладкое",
      pillar: "body",
      frequency: "daily",
      timeOfDay: "anytime",
      completed: true,
      streak: 16
    },
    {
      id: "h7",
      name: "Uxlaguncha 1 soat ekranga qaramaslik",
      name_uz: "Uxlaguncha 1 soat ekranga qaramaslik",
      name_en: "No screen 1h before bed",
      name_ru: "Без экрана за 1 час до сна",
      pillar: "mind",
      frequency: "daily",
      timeOfDay: "evening",
      completed: true,
      streak: 11
    }
  ],
  timer: {
    modeMinutes: 25,
    timeLeftSeconds: 25 * 60,
    completedSessions: 3,
    totalMinutes: 75
  },
  calendar: {
    currentYear: nowInit.getFullYear(),
    currentMonth: nowInit.getMonth(),
    selectedDate: nowInit.getDate()
  },
  heatmapData: generateInitialHeatmapData(),
  notes: [
    {
      id: "n1",
      title_uz: "Tonggi xotirjamlik va chuqur diqqat",
      title_en: "Morning Clarity & Deep Calm",
      title_ru: "Утренняя ясность и глубокий покой",
      content_uz: "Kunni 20 daqiqalik sokin nafas olish mashqlari va ko'k choy bilan boshladim. Ongim tiniqlashdi.",
      content_en: "Started the day with 20 minutes of mindful breathing and herbal tea. Mind feels crystalline.",
      content_ru: "Начала день с 20 минут осознанного дыхания и травяного чая. Чувствую ясность и покой.",
      date: "16-Noyabr, 2026",
      tag: "Xotirjamlik"
    },
    {
      id: "n2",
      title_uz: "Ochiq havoda 8 500 qadam",
      title_en: "Park Walk Reflection",
      title_ru: "Прогулка в парке и размышления",
      content_uz: "Bugun toza havoda shoshilmasdan yurdim, tana muskullari va kayfiyatim a'lo darajaga ko'tarildi.",
      content_en: "Reached over 8,500 steps brisk walking under the sunshine. Vital energy refreshed.",
      content_ru: "Прошла более 8 500 шагов на свежем воздухе. Мышцы в тонусе, настроение прекрасное.",
      date: "15-Noyabr, 2026",
      tag: "Energiya"
    }
  ],
  moodLogs: [
    {
      id: "m1",
      mood: "calm",
      emoji: "🌸",
      energy: 8,
      note_uz: "O'z ritmim bilan xotirjam harakat qilyapman.",
      note_en: "Feeling centered and at peace with my rhythm today.",
      note_ru: "Чувствую внутренний баланс и спокойствие.",
      time: "Bugun, 09:30"
    },
    {
      id: "m2",
      mood: "radiant",
      emoji: "✨",
      energy: 9,
      note_uz: "Ajoyib uyqudan so'ng barcha odatlarni o'z vaqtida bajardim!",
      note_en: "Great restorative sleep and finished 5 habits early!",
      note_ru: "Отличный сон, успела выполнить большинство привычек!",
      time: "Kecha, 20:45"
    }
  ],
  aiChatHistory: [
    {
      sender: "assistant",
      text_uz: "Assalomu alaykum, Sarvinoz! SARV HABIT intizom va xotirjamlik makoniga xush kelibsiz. Bugungi odatlar balansingiz 84% ni tashkil qilmoqda. Sizga qanday yordam bera olaman?",
      text_en: "Hello Sarah! Welcome back to your mindful dashboard. Your habit balance is looking stellar today at 84% completion. How can I assist your goals?",
      text_ru: "Здравствуйте, Сарвиноз! Рады видеть вас в SARV HABIT. Ваш баланс привычек на сегодня составляет 84%. Чем могу помочь вам сегодня?"
    }
  ],
  profiles: [
    { id: "p1", name: "Sarvinoz", alias: "Sarah", active: true }
  ]
};

// ============================================================
// 3. PERSISTENT STORAGE
// ============================================================
class HabitStore {
  constructor() {
    this.KEY = "sarv_habit_state_v2";
    this.state = this.load();
  }

  load() {
    try {
      const s = localStorage.getItem(this.KEY);
      if (s) {
        const parsed = JSON.parse(s);
        // Ensure calendar has real current date
        const realNow = new Date();
        if (!parsed.calendar) {
          parsed.calendar = {
            currentYear: realNow.getFullYear(),
            currentMonth: realNow.getMonth(),
            selectedDate: realNow.getDate()
          };
        }
        if (!parsed.timer) parsed.timer = DEFAULT_STATE.timer;
        if (!parsed.heatmapData) parsed.heatmapData = generateInitialHeatmapData();
        return parsed;
      }
    } catch (e) {
      console.warn("Storage load fallback:", e);
    }
    return JSON.parse(JSON.stringify(DEFAULT_STATE));
  }

  save() {
    try {
      localStorage.setItem(this.KEY, JSON.stringify(this.state));
    } catch (e) {
      console.error("Storage save failed:", e);
    }
  }

  reset() {
    this.state = JSON.parse(JSON.stringify(DEFAULT_STATE));
    this.save();
  }
}

const store = new HabitStore();

// ============================================================
// 4. MAIN SARV HABIT APPLICATION ENGINE
// ============================================================
class SarvHabitApp {
  constructor() {
    this.state = store.state;
    this.timerInterval = null;
    this.audioContext = null;

    this.initDOM();
    this.bindEvents();
    this.applyTheme(this.state.theme);
    this.applyLanguage(this.state.lang || "uz");
    this.renderAll();
  }

  initDOM() {
    // Navigation
    this.navButtons = document.querySelectorAll(".nav-item");
    this.viewSections = document.querySelectorAll(".view-section");
    this.userGreeting = document.getElementById("userGreeting");
    this.founderBadge = document.getElementById("founderBadge");
    this.greetingDate = document.getElementById("greetingDate");
    this.sidebarStreakText = document.getElementById("sidebarStreakText");
    this.mobileMenuToggle = document.getElementById("mobileMenuToggle");
    this.appSidebar = document.getElementById("appSidebar");

    // Header buttons
    this.openAddHabitBtn = document.getElementById("openAddHabitBtn");
    this.openProfileBtn = document.getElementById("openProfileBtn");
    this.langToggleBtn = document.getElementById("langToggleBtn");
    this.currentLangBadge = document.getElementById("currentLangBadge");
    this.langDropdown = document.getElementById("langDropdown");
    this.themeToggleBtn = document.getElementById("themeToggleBtn");
    this.quickNotifBtn = document.getElementById("quickNotifBtn");
    this.authBtn = document.getElementById("authBtn");

    // Daily Focus
    this.dailyFocusIntention = document.getElementById("dailyFocusIntention");
    this.btnToggleDailyFocus = document.getElementById("btnToggleDailyFocus");
    this.focusCheckIcon = document.getElementById("focusCheckIcon");
    this.focusActionText = document.getElementById("focusActionText");

    // Dashboard 1: Daily Balance
    this.mindRingTrack = document.getElementById("mindRingTrack");
    this.bodyRingTrack = document.getElementById("bodyRingTrack");
    this.energyRingTrack = document.getElementById("energyRingTrack");
    this.valMind = document.getElementById("valMind");
    this.valBody = document.getElementById("valBody");
    this.valEnergy = document.getElementById("valEnergy");
    this.balanceFilterBtn = document.getElementById("balanceFilterBtn");
    this.balanceFilterLabel = document.getElementById("balanceFilterLabel");

    // Dashboard 2: Goals
    this.todaysGoalsList = document.getElementById("todaysGoalsList");
    this.goalsCounter = document.getElementById("goalsCounter");
    this.unlockRewardBtn = document.getElementById("unlockRewardBtn");

    // Dashboard 3: Mini Calendar
    this.calPrevMonth = document.getElementById("calPrevMonth");
    this.calNextMonth = document.getElementById("calNextMonth");
    this.calCurrentMonth = document.getElementById("calCurrentMonth");
    this.calWeekdaysRow = document.getElementById("calWeekdaysRow");
    this.miniCalGrid = document.getElementById("miniCalGrid");

    // Bottom 4 Bento Cards
    this.activityStepsVal = document.getElementById("activityStepsVal");
    this.activityProgressFill = document.getElementById("activityProgressFill");
    this.activityTrendText = document.getElementById("activityTrendText");
    this.quickAddActivityBtn = document.getElementById("quickAddActivityBtn");

    this.waterGlassesVal = document.getElementById("waterGlassesVal");
    this.waterStreaksVal = document.getElementById("waterStreaksVal");
    this.waterWave1 = document.getElementById("waterWave1");
    this.waterWave2 = document.getElementById("waterWave2");
    this.quickAddWaterBtn = document.getElementById("quickAddWaterBtn");

    this.meditationQuote = document.getElementById("meditationQuote");
    this.meditationResultVal = document.getElementById("meditationResultVal");
    this.quickAddMeditationBtn = document.getElementById("quickAddMeditationBtn");

    this.sleepHoursVal = document.getElementById("sleepHoursVal");
    this.sleepStatusLabel = document.getElementById("sleepStatusLabel");
    this.sleepIntervalPill = document.getElementById("sleepIntervalPill");
    this.sleepTrendText = document.getElementById("sleepTrendText");
    this.quickAddSleepBtn = document.getElementById("quickAddSleepBtn");

    // Heatmap Widget
    this.dashboardHeatmapGrid = document.getElementById("dashboardHeatmapGrid");
    this.heatmapConsistencyBadge = document.getElementById("heatmapConsistencyBadge");

    // Focus Timer Module
    this.timerPills = document.querySelectorAll(".timer-pill");
    this.timerPulseRing = document.getElementById("timerPulseRing");
    this.timerDigits = document.getElementById("timerDigits");
    this.timerStateLabel = document.getElementById("timerStateLabel");
    this.btnTimerStart = document.getElementById("btnTimerStart");
    this.timerStartText = document.getElementById("timerStartText");
    this.btnTimerReset = document.getElementById("btnTimerReset");
    this.timerSessionsCount = document.getElementById("timerSessionsCount");
    this.timerTotalMinutes = document.getElementById("timerTotalMinutes");

    // Habits Module
    this.habitsFullGrid = document.getElementById("habitsFullGrid");
    this.habitsFilterRow = document.getElementById("habitsFilterRow");
    this.btnCreateHabitFromModule = document.getElementById("btnCreateHabitFromModule");

    // Analytics Module
    this.analyticsOverallRate = document.getElementById("analyticsOverallRate");
    this.analyticsStreakNum = document.getElementById("analyticsStreakNum");
    this.analyticsTotalDone = document.getElementById("analyticsTotalDone");
    this.analyticsBalanceScore = document.getElementById("analyticsBalanceScore");
    this.analyticsWeeklyChart = document.getElementById("analyticsWeeklyChart");
    this.analyticsMindPercent = document.getElementById("analyticsMindPercent");
    this.analyticsBodyPercent = document.getElementById("analyticsBodyPercent");
    this.analyticsEnergyPercent = document.getElementById("analyticsEnergyPercent");

    // Full Calendar Module
    this.fullCalPrev = document.getElementById("fullCalPrev");
    this.fullCalNext = document.getElementById("fullCalNext");
    this.fullCalMonthYear = document.getElementById("fullCalMonthYear");
    this.fullCalWeekdaysRow = document.getElementById("fullCalWeekdaysRow");
    this.fullCalendarDaysGrid = document.getElementById("fullCalendarDaysGrid");

    // Growth Journey & Achievements
    this.journeyLevelName = document.getElementById("journeyLevelName");
    this.journeyXpDisplay = document.getElementById("journeyXpDisplay");
    this.journeyXpFill = document.getElementById("journeyXpFill");
    this.achievementsGrid = document.getElementById("achievementsGrid");

    // Notes Module
    this.btnWriteNewNote = document.getElementById("btnWriteNewNote");
    this.noteCurrentDateTag = document.getElementById("noteCurrentDateTag");
    this.noteTitleInput = document.getElementById("noteTitleInput");
    this.noteContentInput = document.getElementById("noteContentInput");
    this.btnSaveNote = document.getElementById("btnSaveNote");
    this.notesFeed = document.getElementById("notesFeed");
    this.noteTagChips = document.querySelectorAll(".tag-chip");

    // Mood Module
    this.moodEmojiSelector = document.getElementById("moodEmojiSelector");
    this.energySlider = document.getElementById("energySlider");
    this.energyLevelDisplay = document.getElementById("energyLevelDisplay");
    this.moodNoteInput = document.getElementById("moodNoteInput");
    this.btnLogMood = document.getElementById("btnLogMood");
    this.moodHistoryList = document.getElementById("moodHistoryList");

    // AI Coach Module
    this.aiChatBox = document.getElementById("aiChatBox");
    this.aiUserInput = document.getElementById("aiUserInput");
    this.aiSendBtn = document.getElementById("aiSendBtn");
    this.btnRunAiAudit = document.getElementById("btnRunAiAudit");
    this.aiPromptChips = document.querySelectorAll(".ai-prompt-chip");

    // Settings Module
    this.settingUserName = document.getElementById("settingUserName");
    this.settingUserMantra = document.getElementById("settingUserMantra");
    this.btnSaveProfile = document.getElementById("btnSaveProfile");
    this.targetStepsInput = document.getElementById("targetStepsInput");
    this.targetWaterInput = document.getElementById("targetWaterInput");
    this.targetSleepInput = document.getElementById("targetSleepInput");
    this.targetMeditationInput = document.getElementById("targetMeditationInput");
    this.btnSaveTargets = document.getElementById("btnSaveTargets");
    this.settingsLangSelect = document.getElementById("settingsLangSelect");
    this.btnToggleThemeSettings = document.getElementById("btnToggleThemeSettings");
    this.themeSettingsLabel = document.getElementById("themeSettingsLabel");
    this.btnExportData = document.getElementById("btnExportData");
    this.btnImportDataTrigger = document.getElementById("btnImportDataTrigger");
    this.importFileInput = document.getElementById("importFileInput");
    this.btnResetData = document.getElementById("btnResetData");

    // Modals
    this.habitModal = document.getElementById("habitModal");
    this.closeHabitModalBtn = document.getElementById("closeHabitModalBtn");
    this.cancelHabitModalBtn = document.getElementById("cancelHabitModalBtn");
    this.habitForm = document.getElementById("habitForm");
    this.habitModalTitle = document.getElementById("habitModalTitle");
    this.habitIdInput = document.getElementById("habitIdInput");
    this.habitNameInput = document.getElementById("habitNameInput");
    this.habitPillarInput = document.getElementById("habitPillarInput");
    this.habitFrequencyInput = document.getElementById("habitFrequencyInput");
    this.habitIconInput = document.getElementById("habitIconInput");
    this.habitTimeOfDayInput = document.getElementById("habitTimeOfDayInput");

    this.quickLogModal = document.getElementById("quickLogModal");
    this.closeQuickLogModalBtn = document.getElementById("closeQuickLogModalBtn");
    this.quickLogTitle = document.getElementById("quickLogTitle");
    this.quickLogBody = document.getElementById("quickLogBody");

    this.rewardModal = document.getElementById("rewardModal");
    this.closeRewardModalBtn = document.getElementById("closeRewardModalBtn");
    this.rewardMessageText = document.getElementById("rewardMessageText");

    this.authModal = document.getElementById("authModal");
    this.closeAuthModalBtn = document.getElementById("closeAuthModalBtn");
    this.profileChoiceList = document.getElementById("profileChoiceList");

    this.toastContainer = document.getElementById("toastContainer");
  }

  bindEvents() {
    // Nav view switching
    this.navButtons.forEach(btn => {
      btn.addEventListener("click", () => {
        this.switchView(btn.dataset.view);
        if (window.innerWidth <= 900) {
          this.appSidebar.classList.remove("open");
        }
      });
    });

    // Mobile sidebar toggle
    if (this.mobileMenuToggle) {
      this.mobileMenuToggle.addEventListener("click", () => {
        this.appSidebar.classList.toggle("open");
      });
    }

    // Theme toggles
    this.themeToggleBtn.addEventListener("click", () => this.toggleTheme());
    this.btnToggleThemeSettings.addEventListener("click", () => this.toggleTheme());

    // Language selector dropdown
    this.langToggleBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      this.langDropdown.classList.toggle("open");
    });

    document.querySelectorAll(".dropdown-option").forEach(opt => {
      opt.addEventListener("click", () => {
        const lang = opt.dataset.lang;
        this.applyLanguage(lang);
        this.langDropdown.classList.remove("open");
        this.showToast(`Til o'zgartirildi: ${lang.toUpperCase()}`);
      });
    });

    document.addEventListener("click", () => {
      if (this.langDropdown) this.langDropdown.classList.remove("open");
    });

    if (this.settingsLangSelect) {
      this.settingsLangSelect.addEventListener("change", (e) => {
        this.applyLanguage(e.target.value);
      });
    }

    // Daily Focus Toggle
    if (this.btnToggleDailyFocus) {
      this.btnToggleDailyFocus.addEventListener("click", () => this.toggleDailyFocus());
    }

    // Add Habit modal triggers
    this.openAddHabitBtn.addEventListener("click", () => this.openHabitModal());
    if (this.btnCreateHabitFromModule) {
      this.btnCreateHabitFromModule.addEventListener("click", () => this.openHabitModal());
    }
    this.closeHabitModalBtn.addEventListener("click", () => this.closeHabitModal());
    this.cancelHabitModalBtn.addEventListener("click", () => this.closeHabitModal());
    this.habitForm.addEventListener("submit", (e) => this.handleSaveHabit(e));

    // Habit filter chips
    if (this.habitsFilterRow) {
      this.habitsFilterRow.querySelectorAll(".filter-pill").forEach(p => {
        p.addEventListener("click", () => {
          this.habitsFilterRow.querySelectorAll(".filter-pill").forEach(x => x.classList.remove("active"));
          p.classList.add("active");
          this.renderHabitsModule(p.dataset.filter);
        });
      });
    }

    // Calendar navigations
    this.calPrevMonth.addEventListener("click", () => this.changeCalendarMonth(-1));
    this.calNextMonth.addEventListener("click", () => this.changeCalendarMonth(1));
    if (this.fullCalPrev) this.fullCalPrev.addEventListener("click", () => this.changeCalendarMonth(-1));
    if (this.fullCalNext) this.fullCalNext.addEventListener("click", () => this.changeCalendarMonth(1));

    // Focus Timer Controls
    this.timerPills.forEach(pill => {
      pill.addEventListener("click", () => {
        if (this.state.timer.isRunning) return;
        this.timerPills.forEach(x => x.classList.remove("active"));
        pill.classList.add("active");
        const mins = Number(pill.dataset.minutes) || 25;
        this.state.timer.modeMinutes = mins;
        this.state.timer.timeLeftSeconds = mins * 60;
        store.save();
        this.updateTimerDisplay();
      });
    });

    this.btnTimerStart.addEventListener("click", () => this.toggleTimer());
    this.btnTimerReset.addEventListener("click", () => this.resetTimer());

    // Quick Log Modals (Activity/Steps, Water, Meditation, Sleep)
    this.quickAddActivityBtn.addEventListener("click", () => this.openQuickLogModal("activity"));
    this.quickAddWaterBtn.addEventListener("click", () => this.openQuickLogModal("water"));
    this.quickAddMeditationBtn.addEventListener("click", () => this.openQuickLogModal("meditation"));
    this.quickAddSleepBtn.addEventListener("click", () => this.openQuickLogModal("sleep"));
    this.closeQuickLogModalBtn.addEventListener("click", () => this.quickLogModal.classList.remove("open"));

    // Reward Modal
    this.unlockRewardBtn.addEventListener("click", () => this.openRewardModal());
    this.closeRewardModalBtn.addEventListener("click", () => this.rewardModal.classList.remove("open"));

    // Profile & Auth Modal
    this.openProfileBtn.addEventListener("click", () => this.openAuthModal());
    this.authBtn.addEventListener("click", () => this.openAuthModal());
    this.closeAuthModalBtn.addEventListener("click", () => this.authModal.classList.remove("open"));

    // Notes Composer
    this.btnSaveNote.addEventListener("click", () => this.handleSaveNote());
    this.noteTagChips.forEach(chip => {
      chip.addEventListener("click", () => {
        this.noteTagChips.forEach(c => c.classList.remove("active"));
        chip.classList.add("active");
      });
    });
    if (this.btnWriteNewNote) {
      this.btnWriteNewNote.addEventListener("click", () => {
        this.noteTitleInput.focus();
      });
    }

    // Mood Selector
    this.moodEmojiSelector.querySelectorAll(".mood-choice-btn").forEach(btn => {
      btn.addEventListener("click", () => {
        this.moodEmojiSelector.querySelectorAll(".mood-choice-btn").forEach(b => b.classList.remove("active"));
        btn.classList.add("active");
      });
    });
    this.energySlider.addEventListener("input", (e) => {
      this.energyLevelDisplay.textContent = `${e.target.value} / 10`;
    });
    this.btnLogMood.addEventListener("click", () => this.handleLogMood());

    // AI Coach
    this.aiSendBtn.addEventListener("click", () => this.handleAiQuery());
    this.aiUserInput.addEventListener("keydown", (e) => {
      if (e.key === "Enter") this.handleAiQuery();
    });
    this.btnRunAiAudit.addEventListener("click", () => this.runAiQuickPrompt("audit"));
    this.aiPromptChips.forEach(chip => {
      chip.addEventListener("click", () => {
        this.runAiQuickPrompt(chip.dataset.query || chip.dataset.aiPrompt);
      });
    });

    // Settings Profile & Targets
    this.btnSaveProfile.addEventListener("click", () => this.handleSaveProfile());
    this.btnSaveTargets.addEventListener("click", () => this.handleSaveTargets());
    this.btnExportData.addEventListener("click", () => this.exportDataJSON());
    this.btnImportDataTrigger.addEventListener("click", () => this.importFileInput.click());
    this.importFileInput.addEventListener("change", (e) => this.importDataJSON(e));
    this.btnResetData.addEventListener("click", () => {
      const lang = this.state.lang || "uz";
      const confirmMsg = lang === "uz" ? "Barcha ma'lumotlarni tozalashni tasdiqlaysizmi?" : (lang === "ru" ? "Сбросить все данные до стандартных?" : "Reset all data to defaults?");
      if (confirm(confirmMsg)) {
        store.reset();
        this.state = store.state;
        this.renderAll();
        this.showToast(lang === "uz" ? "Boshlang'ich holatga qaytarildi!" : "Reset to defaults!");
      }
    });

    // Quick Notifications button
    this.quickNotifBtn.addEventListener("click", () => {
      const lang = this.state.lang || "uz";
      const msg = lang === "uz" ? "Bugun 5 ta odat a'lo darajada bajarildi! ✨" : (lang === "ru" ? "Сегодня выполнено 5 привычек! ✨" : "5 habits completed today! ✨");
      this.showToast(msg);
    });
  }

  // ============================================================
  // NAVIGATION & THEME
  // ============================================================
  switchView(viewName) {
    this.navButtons.forEach(btn => {
      btn.classList.toggle("active", btn.dataset.view === viewName);
    });
    this.viewSections.forEach(sec => {
      sec.classList.remove("active");
    });
    const target = document.getElementById(`view${viewName.charAt(0).toUpperCase() + viewName.slice(1)}`);
    if (target) {
      target.classList.add("active");
    }

    if (viewName === "habits") this.renderHabitsModule("all");
    else if (viewName === "analytics") this.renderAnalyticsModule();
    else if (viewName === "calendar") this.renderFullCalendar();
    else if (viewName === "journey") this.renderJourneyAndAchievements();
    else if (viewName === "timer") this.updateTimerDisplay();
    else if (viewName === "notes") this.renderNotesFeed();
    else if (viewName === "mood") this.renderMoodHistory();
    else if (viewName === "ai") this.renderAiChat();
    else if (viewName === "settings") this.renderSettingsValues();
  }

  toggleTheme() {
    const nextTheme = this.state.theme === "dark" ? "light" : "dark";
    this.applyTheme(nextTheme);
  }

  applyTheme(theme) {
    this.state.theme = theme;
    document.documentElement.setAttribute("data-theme", theme);
    const isDark = theme === "dark";
    const lang = this.state.lang || "uz";
    this.themeSettingsLabel.textContent = isDark
      ? (lang === "uz" ? "Tungi Rejim" : (lang === "ru" ? "Ночная тема" : "Dark Mode"))
      : (lang === "uz" ? "Yorug' Rejim" : (lang === "ru" ? "Светлая тема" : "Light Mode"));
    store.save();
  }

  // ============================================================
  // FULL TRILINGUAL LOCALIZATION (100% COVERAGE)
  // ============================================================
  applyLanguage(lang) {
    if (!i18n[lang]) lang = "uz";
    this.state.lang = lang;
    document.documentElement.lang = lang;
    store.save();

    this.currentLangBadge.textContent = lang.toUpperCase();
    if (this.settingsLangSelect) this.settingsLangSelect.value = lang;

    // 1. Translate all data-i18n elements
    document.querySelectorAll("[data-i18n]").forEach(el => {
      const key = el.getAttribute("data-i18n");
      if (i18n[lang][key]) {
        el.textContent = i18n[lang][key];
      }
    });

    // 2. Re-render dynamic text sections
    this.renderHeader();
    this.renderDailyFocus();
    this.renderBalanceRings();
    this.renderTodaysGoals();
    this.renderMiniCalendar();
    this.renderFullCalendar();
    this.renderBottomRowCards();
    this.renderHeatmap();
    this.updateTimerDisplay();
    this.renderJourneyAndAchievements();
    this.renderNotesFeed();
    this.renderMoodHistory();
    this.renderAiChat();
    this.renderSettingsValues();
  }

  // Helper to get localized habit name
  getHabitName(h) {
    const lang = this.state.lang || "uz";
    if (lang === "uz" && h.name_uz) return h.name_uz;
    if (lang === "en" && h.name_en) return h.name_en;
    if (lang === "ru" && h.name_ru) return h.name_ru;
    return h.name;
  }

  // ============================================================
  // HEADER RENDERING (REAL CURRENT DATE & FOUNDER)
  // ============================================================
  renderHeader() {
    const lang = this.state.lang || "uz";
    const dict = i18n[lang];
    const hour = new Date().getHours();

    let prefix = dict.greeting_morning;
    if (hour >= 12 && hour < 18) prefix = dict.greeting_afternoon;
    else if (hour >= 18) prefix = dict.greeting_evening;

    // Address the founder as Sarvinoz (or Sarah)
    const displayName = (lang === "en") ? (this.state.user.alias || "Sarah") : (this.state.user.name || "Sarvinoz");
    this.userGreeting.textContent = `${prefix}, ${displayName}!`;
    this.founderBadge.textContent = dict.founder_badge;

    // Real dynamic date calculation
    const now = new Date();
    const day = now.getDate();
    const monthIdx = now.getMonth();
    const year = now.getFullYear();
    const weekdayIdx = now.getDay();
    const calData = CALENDAR_I18N[lang] || CALENDAR_I18N.uz;

    if (lang === "uz") {
      this.greetingDate.textContent = `Bugun, ${day}-${calData.months[monthIdx]}, ${year} (${calData.weekdaysFull[weekdayIdx]})`;
      this.sidebarStreakText.textContent = `${this.state.user.streakDays} Kun`;
    } else if (lang === "ru") {
      const monthGen = calData.monthsGenitive ? calData.monthsGenitive[monthIdx] : calData.months[monthIdx];
      this.greetingDate.textContent = `Сегодня, ${day} ${monthGen} ${year} г. (${calData.weekdaysFull[weekdayIdx]})`;
      this.sidebarStreakText.textContent = `${this.state.user.streakDays} Дней`;
    } else {
      this.greetingDate.textContent = `${calData.weekdaysFull[weekdayIdx]}, ${calData.months[monthIdx]} ${day}, ${year}`;
      this.sidebarStreakText.textContent = `${this.state.user.streakDays} Days`;
    }
  }

  // ============================================================
  // 1. DAILY FOCUS MODULE
  // ============================================================
  renderDailyFocus() {
    const lang = this.state.lang || "uz";
    const dict = i18n[lang];

    const intention = this.state.user.dailyFocusText || dict.default_focus_intention;
    this.dailyFocusIntention.textContent = `“${intention}”`;

    const isDone = !!this.state.user.dailyFocusDone;
    if (isDone) {
      this.btnToggleDailyFocus.classList.add("done");
      this.focusCheckIcon.textContent = "✓";
      this.focusActionText.textContent = dict.btn_focus_completed;
    } else {
      this.btnToggleDailyFocus.classList.remove("done");
      this.focusCheckIcon.textContent = "○";
      this.focusActionText.textContent = dict.btn_mark_focused;
    }
  }

  toggleDailyFocus() {
    this.state.user.dailyFocusDone = !this.state.user.dailyFocusDone;
    if (this.state.user.dailyFocusDone) {
      this.addXp(30);
      const lang = this.state.lang || "uz";
      this.showToast(lang === "uz" ? "Kunlik fokus bajarildi! +30 XP 🌟" : "Daily focus achieved! +30 XP 🌟");
    }
    store.save();
    this.renderDailyFocus();
  }

  // ============================================================
  // 2. DASHBOARD: DAILY BALANCE CONCENTRIC RINGS
  // ============================================================
  renderBalanceRings() {
    const habits = this.state.habits;
    const mindCount = habits.filter(h => h.pillar === "mind" && h.completed).length;
    const bodyCount = habits.filter(h => h.pillar === "body" && h.completed).length;
    const energyCount = habits.filter(h => h.pillar === "energy" && h.completed).length;
    const total = mindCount + bodyCount + energyCount;

    let m = 40, b = 30, e = 30;
    if (total > 0) {
      m = Math.round((mindCount / total) * 100);
      b = Math.round((bodyCount / total) * 100);
      e = Math.max(0, 100 - m - b);
    }

    this.valMind.textContent = `${m}%`;
    this.valBody.textContent = `${b}%`;
    this.valEnergy.textContent = `${e}%`;

    // Circumferences: 703, 590, 477
    this.mindRingTrack.style.strokeDashoffset = 703 - (703 * (m / 100));
    this.bodyRingTrack.style.strokeDashoffset = 590 - (590 * (b / 100));
    this.energyRingTrack.style.strokeDashoffset = 477 - (477 * (e / 100));
  }

  // ============================================================
  // 3. DASHBOARD: TODAY'S GOALS CHECKLIST
  // ============================================================
  renderTodaysGoals() {
    this.todaysGoalsList.innerHTML = "";
    const habits = this.state.habits;
    const done = habits.filter(h => h.completed).length;
    this.goalsCounter.textContent = `${done} / ${habits.length}`;

    habits.forEach(h => {
      const item = document.createElement("div");
      item.className = `goal-item ${h.completed ? "completed" : ""}`;
      const name = this.getHabitName(h);
      item.innerHTML = `
        <div class="goal-checkbox" aria-label="Toggle habit">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3">
            <polyline points="20 6 9 17 4 12"></polyline>
          </svg>
        </div>
        <span class="goal-label">${name}</span>
      `;
      item.addEventListener("click", () => this.toggleHabitCompletion(h.id));
      this.todaysGoalsList.appendChild(item);
    });
  }

  toggleHabitCompletion(id) {
    const h = this.state.habits.find(x => x.id === id);
    if (!h) return;
    h.completed = !h.completed;
    h.streak = h.completed ? (h.streak || 0) + 1 : Math.max(0, (h.streak || 1) - 1);

    if (h.completed) {
      this.addXp(20);
      this.showToast(`“${this.getHabitName(h)}” bajarildi! +20 XP ✨`);
    }

    store.save();
    this.renderBalanceRings();
    this.renderTodaysGoals();
    this.renderHabitsModule("all");
    this.renderAnalyticsModule();
    this.renderHeatmap();

    if (this.state.habits.every(x => x.completed)) {
      setTimeout(() => this.openRewardModal(), 350);
    }
  }

  // ============================================================
  // 4. CALENDARS (REAL DATE CALCULATIONS)
  // ============================================================
  changeCalendarMonth(delta) {
    let { currentYear: y, currentMonth: m } = this.state.calendar;
    m += delta;
    if (m > 11) { m = 0; y += 1; }
    else if (m < 0) { m = 11; y -= 1; }
    this.state.calendar.currentYear = y;
    this.state.calendar.currentMonth = m;
    store.save();
    this.renderMiniCalendar();
    this.renderFullCalendar();
  }

  renderMiniCalendar() {
    const lang = this.state.lang || "uz";
    const calData = CALENDAR_I18N[lang] || CALENDAR_I18N.uz;
    const { currentYear: y, currentMonth: m } = this.state.calendar;
    const realNow = new Date();
    const isCurrentRealMonth = (realNow.getFullYear() === y && realNow.getMonth() === m);
    const realTodayDate = realNow.getDate();

    this.calCurrentMonth.textContent = `${calData.months[m]} ${y}`;

    // Weekday abbreviations
    this.calWeekdaysRow.innerHTML = "";
    calData.weekdaysShort.forEach(d => {
      const span = document.createElement("span");
      span.textContent = d;
      this.calWeekdaysRow.appendChild(span);
    });

    this.miniCalGrid.innerHTML = "";
    const firstDayIndex = new Date(y, m, 1).getDay(); // 0 is Sunday
    const totalDays = new Date(y, m + 1, 0).getDate();
    const prevMonthDays = new Date(y, m, 0).getDate();

    // Fill previous month days
    for (let i = firstDayIndex - 1; i >= 0; i--) {
      const cell = document.createElement("div");
      cell.className = "cal-day other-month";
      cell.textContent = prevMonthDays - i;
      this.miniCalGrid.appendChild(cell);
    }

    // Current month days
    for (let d = 1; d <= totalDays; d++) {
      const cell = document.createElement("div");
      const isToday = isCurrentRealMonth && (d === realTodayDate);
      cell.className = `cal-day ${isToday ? "today selected" : ""}`;
      cell.textContent = d;
      cell.addEventListener("click", () => {
        this.miniCalGrid.querySelectorAll(".cal-day").forEach(c => c.classList.remove("selected"));
        cell.classList.add("selected");
        this.state.calendar.selectedDate = d;
        store.save();
      });
      this.miniCalGrid.appendChild(cell);
    }
  }

  renderFullCalendar() {
    if (!this.fullCalendarDaysGrid) return;
    const lang = this.state.lang || "uz";
    const calData = CALENDAR_I18N[lang] || CALENDAR_I18N.uz;
    const { currentYear: y, currentMonth: m } = this.state.calendar;
    const realNow = new Date();
    const isCurrentRealMonth = (realNow.getFullYear() === y && realNow.getMonth() === m);
    const realTodayDate = realNow.getDate();

    this.fullCalMonthYear.textContent = `${calData.months[m]} ${y}`;

    this.fullCalWeekdaysRow.innerHTML = "";
    calData.weekdaysShort.forEach(d => {
      const span = document.createElement("span");
      span.textContent = d;
      this.fullCalWeekdaysRow.appendChild(span);
    });

    this.fullCalendarDaysGrid.innerHTML = "";
    const firstDayIndex = new Date(y, m, 1).getDay();
    const totalDays = new Date(y, m + 1, 0).getDate();
    const prevMonthDays = new Date(y, m, 0).getDate();

    for (let i = firstDayIndex - 1; i >= 0; i--) {
      const cell = document.createElement("div");
      cell.className = "full-cal-cell other-month";
      cell.innerHTML = `<span class="full-cal-date-num">${prevMonthDays - i}</span>`;
      this.fullCalendarDaysGrid.appendChild(cell);
    }

    for (let d = 1; d <= totalDays; d++) {
      const cell = document.createElement("div");
      const isToday = isCurrentRealMonth && (d === realTodayDate);
      cell.className = `full-cal-cell ${isToday ? "today" : ""}`;
      const completedCount = ((d * 3 + 7) % 4) + 3; // simulated daily count
      cell.innerHTML = `
        <span class="full-cal-date-num">${d}</span>
        <div class="full-cal-dots-wrap">
          <span class="full-cal-dot dot-mind"></span>
          <span class="full-cal-dot dot-body"></span>
          <span class="full-cal-dot dot-energy"></span>
        </div>
        <span class="full-cal-done-count">${completedCount}/7</span>
      `;
      cell.addEventListener("click", () => {
        const lang = this.state.lang || "uz";
        this.showToast(`${d}-${calData.months[m]}: ${completedCount} ta odat bajarilgan!`);
      });
      this.fullCalendarDaysGrid.appendChild(cell);
    }
  }

  // ============================================================
  // 5. DASHBOARD: 4 BOTTOM CARDS (STEPS, WATER, MEDITATION, SLEEP)
  // ============================================================
  renderBottomRowCards() {
    const lang = this.state.lang || "uz";
    const met = this.state.metrics;
    const tgt = this.state.targets;

    // 1. Activity / Steps
    this.activityStepsVal.textContent = met.stepsCurrent.toLocaleString();
    const stepsPct = Math.min(100, Math.round((met.stepsCurrent / tgt.steps) * 100));
    this.activityProgressFill.style.width = `${stepsPct}%`;
    const trendTextActivity = lang === "uz" ? "+15% kechagiga nisbatan" : (lang === "ru" ? "+15% к вчерашнему дню" : "+15% vs yesterday");
    this.activityTrendText.innerHTML = `<span data-i18n="trend_label">${i18n[lang].trend_label}</span> <strong>${trendTextActivity}</strong>`;

    // 2. Water Rate
    this.waterGlassesVal.textContent = `${met.waterGlassesCurrent} / ${tgt.water}`;
    const waterDaysWord = lang === "uz" ? "kun" : (lang === "ru" ? "дней" : "days");
    this.waterStreaksVal.textContent = `${met.waterStreakDays} ${waterDaysWord}`;
    const waterPct = Math.min(100, (met.waterGlassesCurrent / tgt.water) * 100);
    const waveTop = 100 - waterPct;
    this.waterWave1.style.top = `${waveTop}%`;
    this.waterWave2.style.top = `${waveTop}%`;

    // 3. Meditation
    this.meditationResultVal.textContent = `${met.meditationMinutesCurrent} ${lang === "uz" ? "daqiqa" : (lang === "ru" ? "минут" : "min")}`;
    if (lang === "uz") this.meditationQuote.textContent = "“Bugun men xotirjamlikni tanlayman”";
    else if (lang === "ru") this.meditationQuote.textContent = "«Сегодня я выбираю внутренний покой»";
    else this.meditationQuote.textContent = "“I choose peace today”";

    // 4. Sleep Quality
    const hrs = Math.floor(met.sleepHoursCurrent);
    const mins = Math.round((met.sleepHoursCurrent - hrs) * 60);
    this.sleepHoursVal.textContent = `${hrs}${lang === "uz" ? "s" : (lang === "ru" ? "ч" : "h")} ${mins}${lang === "uz" ? "d" : (lang === "ru" ? "м" : "m")}`;
    this.sleepIntervalPill.textContent = met.sleepInterval;
    const sleepTrend = lang === "uz" ? "+10% o'tgan haftaga nisbatan" : (lang === "ru" ? "+10% к прошлой неделе" : "+10% vs last week");
    this.sleepTrendText.innerHTML = `<span data-i18n="trend_label">${i18n[lang].trend_label}</span> <strong>${sleepTrend}</strong>`;
  }

  // ============================================================
  // 6. HABIT HEATMAP MATRIX (60 DAYS)
  // ============================================================
  renderHeatmap() {
    if (!this.dashboardHeatmapGrid) return;
    this.dashboardHeatmapGrid.innerHTML = "";
    const lang = this.state.lang || "uz";
    const data = this.state.heatmapData || generateInitialHeatmapData();

    const grid = document.createElement("div");
    grid.className = "heatmap-grid-inner";

    data.forEach(item => {
      const cell = document.createElement("div");
      let level = 0;
      if (item.count >= 5) level = 4;
      else if (item.count >= 4) level = 3;
      else if (item.count >= 2) level = 2;
      else if (item.count >= 1) level = 1;

      cell.className = `heatmap-cell level-${level}`;
      const titleText = `${item.dateStr}: ${item.count} ${lang === "uz" ? "ta odat bajarildi" : (lang === "ru" ? "привычек выполнено" : "habits completed")}`;
      cell.setAttribute("title", titleText);
      cell.addEventListener("click", () => this.showToast(titleText));
      grid.appendChild(cell);
    });

    this.dashboardHeatmapGrid.appendChild(grid);

    // Heatmap legend
    const legend = document.createElement("div");
    legend.className = "heatmap-legend";
    legend.innerHTML = `
      <span>Kam</span>
      <span class="heatmap-legend-cell" style="background: rgba(137, 151, 239, 0.14);"></span>
      <span class="heatmap-legend-cell" style="background: rgba(165, 180, 252, 0.45);"></span>
      <span class="heatmap-legend-cell" style="background: rgba(129, 140, 248, 0.7);"></span>
      <span class="heatmap-legend-cell" style="background: #818cf8;"></span>
      <span class="heatmap-legend-cell" style="background: #6366f1;"></span>
      <span>Ko'p</span>
    `;
    this.dashboardHeatmapGrid.appendChild(legend);
  }

  // ============================================================
  // 7. FOCUS TIMER MODULE (POMODORO)
  // ============================================================
  updateTimerDisplay() {
    const sec = this.state.timer.timeLeftSeconds;
    const m = Math.floor(sec / 60);
    const s = sec % 60;
    this.timerDigits.textContent = `${String(m).padStart(2, "0")}:${String(s).padStart(2, "0")}`;

    const lang = this.state.lang || "uz";
    const dict = i18n[lang];

    if (this.state.timer.isRunning) {
      this.timerStartText.textContent = dict.timer_btn_pause;
      this.timerStateLabel.textContent = dict.timer_state_running;
      this.timerPulseRing.classList.add("running");
    } else {
      this.timerStartText.textContent = dict.timer_btn_start;
      this.timerPulseRing.classList.remove("running");
      if (sec === 0) {
        this.timerStateLabel.textContent = dict.timer_state_done;
      } else {
        this.timerStateLabel.textContent = dict.timer_state_ready;
      }
    }

    if (this.timerSessionsCount) {
      this.timerSessionsCount.textContent = `${this.state.timer.completedSessions} ${lang === "uz" ? "ta" : (lang === "ru" ? "сессий" : "sessions")}`;
    }
    if (this.timerTotalMinutes) {
      this.timerTotalMinutes.textContent = `${this.state.timer.totalMinutes} ${lang === "uz" ? "daqiqa" : (lang === "ru" ? "минут" : "minutes")}`;
    }
  }

  toggleTimer() {
    if (this.state.timer.isRunning) {
      clearInterval(this.timerInterval);
      this.state.timer.isRunning = false;
      this.updateTimerDisplay();
      store.save();
    } else {
      if (this.state.timer.timeLeftSeconds <= 0) {
        this.state.timer.timeLeftSeconds = this.state.timer.modeMinutes * 60;
      }
      this.state.timer.isRunning = true;
      this.updateTimerDisplay();
      this.timerInterval = setInterval(() => {
        if (this.state.timer.timeLeftSeconds > 0) {
          this.state.timer.timeLeftSeconds--;
          this.updateTimerDisplay();
        } else {
          this.completeTimerSession();
        }
      }, 1000);
      store.save();
    }
  }

  resetTimer() {
    clearInterval(this.timerInterval);
    this.state.timer.isRunning = false;
    this.state.timer.timeLeftSeconds = this.state.timer.modeMinutes * 60;
    store.save();
    this.updateTimerDisplay();
  }

  completeTimerSession() {
    clearInterval(this.timerInterval);
    this.state.timer.isRunning = false;
    this.state.timer.completedSessions = (this.state.timer.completedSessions || 0) + 1;
    this.state.timer.totalMinutes = (this.state.timer.totalMinutes || 0) + this.state.timer.modeMinutes;
    this.addXp(25);
    this.playChimeSound();

    const lang = this.state.lang || "uz";
    const msg = lang === "uz" ? "Fokus seansi muvaffaqiyatli yakunlandi! +25 XP 🌟" : "Focus session completed! +25 XP 🌟";
    this.showToast(msg);
    store.save();
    this.updateTimerDisplay();
  }

  playChimeSound() {
    try {
      const ctx = new (window.AudioContext || window.webkitAudioContext)();
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = "sine";
      osc.frequency.setValueAtTime(587.33, ctx.currentTime); // D5
      osc.frequency.exponentialRampToValueAtTime(880, ctx.currentTime + 0.4); // A5
      gain.gain.setValueAtTime(0.2, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 1.2);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start();
      osc.stop(ctx.currentTime + 1.2);
    } catch (e) {
      // AudioContext policy safe guard
    }
  }

  // ============================================================
  // 8. PERSONAL GROWTH JOURNEY & ACHIEVEMENTS
  // ============================================================
  addXp(pts) {
    this.state.user.xp = (this.state.user.xp || 0) + pts;
    store.save();
    this.renderJourneyAndAchievements();
  }

  getCurrentLevel() {
    const xp = this.state.user.xp || 850;
    for (let i = GROWTH_LEVELS.length - 1; i >= 0; i--) {
      if (xp >= GROWTH_LEVELS[i].minXp) return GROWTH_LEVELS[i];
    }
    return GROWTH_LEVELS[0];
  }

  renderJourneyAndAchievements() {
    if (!this.journeyLevelName) return;
    const lang = this.state.lang || "uz";
    const dict = i18n[lang];
    const lvl = this.getCurrentLevel();
    const xp = this.state.user.xp || 850;

    const lvlName = lvl[`name_${lang}`] || lvl.name_uz;
    this.journeyLevelName.textContent = `${lvl.icon} ${lvlName}`;

    const range = lvl.maxXp - lvl.minXp;
    const currentInRange = xp - lvl.minXp;
    const pct = Math.min(100, Math.max(10, Math.round((currentInRange / range) * 100)));

    this.journeyXpDisplay.textContent = `${xp} / ${lvl.maxXp} XP`;
    this.journeyXpFill.style.width = `${pct}%`;

    // Render achievements
    if (this.achievementsGrid) {
      this.achievementsGrid.innerHTML = "";
      ACHIEVEMENTS_LIST.forEach(ach => {
        const card = document.createElement("div");
        card.className = `achievement-card ${ach.unlocked ? "unlocked" : "locked"}`;
        const title = ach[`title_${lang}`] || ach.title_uz;
        const desc = ach[`desc_${lang}`] || ach.desc_uz;
        const status = ach.unlocked ? dict.badge_unlocked : dict.badge_locked;

        card.innerHTML = `
          <div class="achieve-icon-wrap">${ach.icon}</div>
          <div class="achieve-info-wrap">
            <h4 class="achieve-title">${title}</h4>
            <p class="achieve-desc">${desc}</p>
            <span class="achieve-status-badge">${status}</span>
          </div>
        `;
        this.achievementsGrid.appendChild(card);
      });
    }
  }

  // ============================================================
  // 9. HABITS MANAGEMENT MODULE
  // ============================================================
  renderHabitsModule(filter = "all") {
    if (!this.habitsFullGrid) return;
    this.habitsFullGrid.innerHTML = "";
    let list = this.state.habits;

    if (filter === "completed") list = list.filter(h => h.completed);
    else if (filter !== "all") list = list.filter(h => h.pillar === filter);

    list.forEach(h => {
      const card = document.createElement("div");
      card.className = `bento-card habit-management-card ${h.completed ? "is-done" : ""}`;
      const name = this.getHabitName(h);
      const pillarName = i18n[this.state.lang || "uz"][`badge_${h.pillar}`] || h.pillar;

      card.innerHTML = `
        <div class="habit-mg-left">
          <div class="goal-checkbox ${h.completed ? "checked" : ""}">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><polyline points="20 6 9 17 4 12"></polyline></svg>
          </div>
          <div>
            <h4 class="habit-mg-title">${name}</h4>
            <div class="habit-mg-meta">
              <span class="badge-${h.pillar}">${pillarName}</span>
              <span>🔥 ${h.streak || 0} ${this.state.lang === "uz" ? "kun" : "days"}</span>
            </div>
          </div>
        </div>
        <div class="habit-mg-actions">
          <button class="icon-action-btn edit-btn" title="Tahrirlash">✎</button>
          <button class="icon-action-btn del-btn" title="O'chirish">✕</button>
        </div>
      `;

      card.querySelector(".goal-checkbox").addEventListener("click", () => this.toggleHabitCompletion(h.id));
      card.querySelector(".edit-btn").addEventListener("click", () => this.openHabitModal(h));
      card.querySelector(".del-btn").addEventListener("click", () => this.deleteHabit(h.id));
      this.habitsFullGrid.appendChild(card);
    });
  }

  openHabitModal(habit = null) {
    this.habitModal.classList.add("open");
    const lang = this.state.lang || "uz";
    if (habit) {
      this.habitModalTitle.textContent = lang === "uz" ? "Odatni tahrirlash" : (lang === "ru" ? "Редактировать привычку" : "Edit Habit");
      this.habitIdInput.value = habit.id;
      this.habitNameInput.value = this.getHabitName(habit);
      this.habitPillarInput.value = habit.pillar;
      this.habitFrequencyInput.value = habit.frequency || "daily";
      this.habitTimeOfDayInput.value = habit.timeOfDay || "morning";
    } else {
      this.habitModalTitle.textContent = i18n[lang].modal_add_habit_title;
      this.habitIdInput.value = "";
      this.habitForm.reset();
    }
  }

  closeHabitModal() {
    this.habitModal.classList.remove("open");
  }

  handleSaveHabit(e) {
    e.preventDefault();
    const id = this.habitIdInput.value;
    const name = this.habitNameInput.value.trim();
    const pillar = this.habitPillarInput.value;
    const frequency = this.habitFrequencyInput.value;
    const timeOfDay = this.habitTimeOfDayInput.value;

    if (!name) return;

    if (id) {
      const h = this.state.habits.find(x => x.id === id);
      if (h) {
        h.name = name;
        h.name_uz = name;
        h.name_en = name;
        h.name_ru = name;
        h.pillar = pillar;
        h.frequency = frequency;
        h.timeOfDay = timeOfDay;
      }
    } else {
      const newHabit = {
        id: `h_${Date.now()}`,
        name,
        name_uz: name,
        name_en: name,
        name_ru: name,
        pillar,
        frequency,
        timeOfDay,
        completed: false,
        streak: 1
      };
      this.state.habits.push(newHabit);
      this.addXp(15);
    }

    store.save();
    this.closeHabitModal();
    this.renderAll();
    this.showToast(this.state.lang === "uz" ? "Odat saqlandi! ✨" : "Habit saved! ✨");
  }

  deleteHabit(id) {
    const lang = this.state.lang || "uz";
    const confirmMsg = lang === "uz" ? "Ushbu odatni o'chirmoqchimisiz?" : (lang === "ru" ? "Удалить эту привычку?" : "Delete this habit?");
    if (confirm(confirmMsg)) {
      this.state.habits = this.state.habits.filter(h => h.id !== id);
      store.save();
      this.renderAll();
      this.showToast(lang === "uz" ? "Odat o'chirildi" : "Habit deleted");
    }
  }

  // ============================================================
  // 10. ANALYTICS MODULE
  // ============================================================
  renderAnalyticsModule() {
    const habits = this.state.habits;
    const done = habits.filter(h => h.completed).length;
    const total = habits.length;
    const rate = total > 0 ? Math.round((done / total) * 100) : 0;

    this.analyticsOverallRate.textContent = `${rate}%`;
    this.analyticsStreakNum.textContent = `${this.state.user.streakDays} ${this.state.lang === "uz" ? "Kun" : "Days"}`;
    this.analyticsTotalDone.textContent = `${done * 18} ta`;
    this.analyticsBalanceScore.textContent = `${Math.min(100, 80 + Math.round(rate * 0.2))} / 100`;

    // Pillar breakdown
    const mCount = habits.filter(h => h.pillar === "mind" && h.completed).length;
    const bCount = habits.filter(h => h.pillar === "body" && h.completed).length;
    const eCount = habits.filter(h => h.pillar === "energy" && h.completed).length;
    const compTotal = mCount + bCount + eCount || 1;

    const mp = Math.round((mCount / compTotal) * 100);
    const bp = Math.round((bCount / compTotal) * 100);
    const ep = Math.max(0, 100 - mp - bp);

    this.analyticsMindPercent.textContent = `${mp}%`;
    this.analyticsBodyPercent.textContent = `${bp}%`;
    this.analyticsEnergyPercent.textContent = `${ep}%`;

    // Weekly activity chart
    if (this.analyticsWeeklyChart) {
      this.analyticsWeeklyChart.innerHTML = "";
      const weekdays = this.state.lang === "uz"
        ? ["Du", "Se", "Ch", "Pa", "Ju", "Sh", "Ya"]
        : (this.state.lang === "ru" ? ["Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Вс"] : ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]);
      const values = [70, 85, 90, 80, 95, 75, rate || 85];

      weekdays.forEach((day, idx) => {
        const val = values[idx];
        const barItem = document.createElement("div");
        barItem.className = "bar-item";
        barItem.innerHTML = `
          <div class="bar-track">
            <div class="bar-fill" style="height: ${val}%;"></div>
          </div>
          <span class="bar-label">${day}</span>
        `;
        this.analyticsWeeklyChart.appendChild(barItem);
      });
    }
  }

  // ============================================================
  // 11. WEEKLY REFLECTION & NOTES MODULE
  // ============================================================
  renderNotesFeed() {
    if (!this.notesFeed) return;
    this.notesFeed.innerHTML = "";
    const lang = this.state.lang || "uz";

    this.state.notes.forEach(note => {
      const card = document.createElement("div");
      card.className = "bento-card note-feed-card";
      const title = note[`title_${lang}`] || note.title;
      const content = note[`content_${lang}`] || note.content;

      card.innerHTML = `
        <div class="note-card-header">
          <h4 class="note-card-title">${title}</h4>
          <span class="note-card-date">${note.date}</span>
        </div>
        <p class="note-card-body">${content}</p>
        <span class="tag-chip active" style="align-self:flex-start; margin-top:8px;">${note.tag || "Mindful"}</span>
      `;
      this.notesFeed.appendChild(card);
    });
  }

  handleSaveNote() {
    const title = this.noteTitleInput.value.trim();
    const content = this.noteContentInput.value.trim();
    if (!title || !content) {
      alert("Iltimos, sarlavha va matnni to'ldiring.");
      return;
    }

    const activeChip = document.querySelector(".tag-chip.active");
    const tag = activeChip ? activeChip.dataset.tag : "Xotirjamlik";
    const now = new Date();
    const dateStr = `${now.getDate()}-Noyabr, ${now.getFullYear()}`;

    const newNote = {
      id: `n_${Date.now()}`,
      title,
      title_uz: title,
      title_en: title,
      title_ru: title,
      content,
      content_uz: content,
      content_en: content,
      content_ru: content,
      date: dateStr,
      tag
    };

    this.state.notes.unshift(newNote);
    this.addXp(20);
    store.save();

    this.noteTitleInput.value = "";
    this.noteContentInput.value = "";
    this.renderNotesFeed();
    this.showToast("Mulohaza saqlandi! +20 XP ✨");
  }

  // ============================================================
  // 12. MOOD TRACKER MODULE
  // ============================================================
  renderMoodHistory() {
    if (!this.moodHistoryList) return;
    this.moodHistoryList.innerHTML = "";
    const lang = this.state.lang || "uz";

    this.state.moodLogs.forEach(log => {
      const item = document.createElement("div");
      item.className = "mood-history-item";
      const note = log[`note_${lang}`] || log.note;

      item.innerHTML = `
        <div class="mood-hist-emoji">${log.emoji}</div>
        <div class="mood-hist-details">
          <div class="mood-hist-top">
            <strong>${log.mood.toUpperCase()}</strong>
            <span class="mood-hist-time">${log.time}</span>
          </div>
          <p class="mood-hist-note">${note}</p>
          <span class="mood-energy-badge">Energiya: ${log.energy}/10</span>
        </div>
      `;
      this.moodHistoryList.appendChild(item);
    });
  }

  handleLogMood() {
    const activeBtn = this.moodEmojiSelector.querySelector(".mood-choice-btn.active");
    const mood = activeBtn ? activeBtn.dataset.mood : "calm";
    const emoji = activeBtn ? activeBtn.querySelector(".emoji-icon").textContent : "🌸";
    const energy = Number(this.energySlider.value) || 8;
    const note = this.moodNoteInput.value.trim() || "Xotirjam va ijobiy hislar.";

    const newMood = {
      id: `m_${Date.now()}`,
      mood,
      emoji,
      energy,
      note_uz: note,
      note_en: note,
      note_ru: note,
      time: "Hozir, " + new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    this.state.moodLogs.unshift(newMood);
    this.addXp(15);
    store.save();

    this.moodNoteInput.value = "";
    this.renderMoodHistory();
    this.showToast("Kayfiyat qayd qilindi! +15 XP 🌸");
  }

  // ============================================================
  // 13. AI HABIT COACH (LOCALIZED INTELLIGENCE)
  // ============================================================
  renderAiChat() {
    if (!this.aiChatBox) return;
    this.aiChatBox.innerHTML = "";
    const lang = this.state.lang || "uz";

    this.state.aiChatHistory.forEach(msg => {
      const wrap = document.createElement("div");
      wrap.className = `ai-message ${msg.sender === "user" ? "user-msg" : "bot-msg"}`;
      const text = msg[`text_${lang}`] || msg.text;
      wrap.innerHTML = `<p>${text}</p>`;
      this.aiChatBox.appendChild(wrap);
    });
    this.aiChatBox.scrollTop = this.aiChatBox.scrollHeight;
  }

  runAiQuickPrompt(type) {
    const lang = this.state.lang || "uz";
    const queries = {
      audit: {
        uz: "Odatlarim muvozanati qanday?",
        en: "How is my habit balance this week?",
        ru: "Как выглядит мой баланс на этой неделе?"
      },
      motivation: {
        uz: "Menga ilhom baxsh etuvchi fikr ayt",
        en: "Give me motivational advice",
        ru: "Дай мне мотивационный совет"
      },
      sleep: {
        uz: "Uyqu sifatini qanday yaxshilash mumkin?",
        en: "How can I improve my sleep routine?",
        ru: "Как улучшить качество сна?"
      },
      newhabit: {
        uz: "Yangi ertalabki odat tavsiya qil",
        en: "Suggest a morning routine",
        ru: "Посоветуй утреннюю привычку"
      }
    };
    this.processAiResponse(queries[type][lang] || queries[type].uz);
  }

  handleAiQuery() {
    const t = this.aiUserInput.value.trim();
    if (!t) return;
    this.aiUserInput.value = "";
    this.processAiResponse(t);
  }

  processAiResponse(userText) {
    this.state.aiChatHistory.push({ sender: "user", text: userText });
    this.renderAiChat();

    const lang = this.state.lang || "uz";
    const done = this.state.habits.filter(h => h.completed).length;
    const total = this.state.habits.length;
    const rate = Math.round((done / total) * 100);
    const lower = userText.toLowerCase();

    let reply = "";
    if (lower.includes("audit") || lower.includes("balance") || lower.includes("muvozanat") || lower.includes("tahlil") || lower.includes("баланс")) {
      if (lang === "uz") {
        reply = `📊 **SARV Tahlil:** Sarvinoz, bugungi odatlar bajarilishi **${rate}%** (${done}/${total}). Suv me'yori: ${this.state.metrics.waterGlassesCurrent}/10 stakan. Aql va Tana balansingiz deyarli mukammal!`;
      } else if (lang === "ru") {
        reply = `📊 **Аудит SARV:** Сарвиноз, сегодня выполнено **${rate}%** целей (${done}/${total}). Вода: ${this.state.metrics.waterGlassesCurrent}/10 ст. Баланс Разума и Тела в отличной гармонии!`;
      } else {
        reply = `📊 **SARV Habit Audit:** Sarah, your completion is at **${rate}%** (${done}/${total} goals). Hydration: ${this.state.metrics.waterGlassesCurrent}/10 glasses. Mind and Body balance is in stellar harmony!`;
      }
    } else if (lower.includes("sleep") || lower.includes("uyqu") || lower.includes("сон")) {
      if (lang === "uz") {
        reply = `🌙 **Uyqu bo'yicha tavsiya:** Kecha 7 soat 20 daqiqa dam oldingiz. Uyqu fazasini chuqurlashtirish uchun yotishdan 1 soat oldin telefon va ekranlarni o'chiring.`;
      } else if (lang === "ru") {
        reply = `🌙 **Совет по сну:** Вы спали 7 ч 20 мин. Для максимального восстановления отключите экраны за час до сна и проветрите спальню.`;
      } else {
        reply = `🌙 **Sleep Optimization:** You slept 7h 20m. To enhance deep restorative sleep, disconnect from blue-light screens 60 minutes before bedtime.`;
      }
    } else if (lower.includes("motivation") || lower.includes("ilhom") || lower.includes("мотивац")) {
      if (lang === "uz") {
        reply = `✨ *“Kichik kunlik intizom katta g'alabalarga olib keladi.”* Siz ${this.state.user.streakDays} kunlik ajoyib seriyani davom ettiryapsiz. Sarv kabi mustahkam bo'ling!`;
      } else if (lang === "ru") {
        reply = `✨ *«Маленькие ежедневные привычки ведут к великим переменам».* Ваша серия составляет ${this.state.user.streakDays} дней! Держите этот темп.`;
      } else {
        reply = `✨ *“Small daily disciplines lead to massive life transformations.”* You have an active ${this.state.user.streakDays}-day streak! Stay resilient like the cypress.`;
      }
    } else {
      if (lang === "uz") {
        reply = `🌱 **Murabbiy maslahati:** Tonggi meditatsiya va 10 000 qadam yurish energiyangizni kun bo'yi yuqori darajada ushlab turadi. Diqqatni bir joyga jamlang!`;
      } else if (lang === "ru") {
        reply = `🌱 **Совет наставника:** Утренняя медитация и 10 000 шагов обеспечат вам запас энергии на весь день. Сохраняйте осознанность!`;
      } else {
        reply = `🌱 **Coach Insight:** Morning meditation combined with 10,000 steps creates peak vitality throughout the day. Honor your daily rhythm!`;
      }
    }

    setTimeout(() => {
      this.state.aiChatHistory.push({ sender: "assistant", text: reply });
      store.save();
      this.renderAiChat();
    }, 380);
  }

  // ============================================================
  // 14. SETTINGS & PROFILE
  // ============================================================
  renderSettingsValues() {
    this.settingUserName.value = this.state.user.name;
    this.settingUserMantra.value = this.state.user.mantra;
    this.targetStepsInput.value = this.state.targets.steps;
    this.targetWaterInput.value = this.state.targets.water;
    this.targetSleepInput.value = this.state.targets.sleep;
    this.targetMeditationInput.value = this.state.targets.meditation;
  }

  handleSaveProfile() {
    const n = this.settingUserName.value.trim();
    const m = this.settingUserMantra.value.trim();
    if (n) this.state.user.name = n;
    if (m) this.state.user.mantra = m;
    store.save();
    this.renderHeader();
    this.showToast(this.state.lang === "uz" ? "Profil muvaffaqiyatli saqlandi!" : "Profile saved!");
  }

  handleSaveTargets() {
    this.state.targets.steps = Number(this.targetStepsInput.value) || 10000;
    this.state.targets.water = Number(this.targetWaterInput.value) || 10;
    this.state.targets.sleep = Number(this.targetSleepInput.value) || 8.0;
    this.state.targets.meditation = Number(this.targetMeditationInput.value) || 20;
    store.save();
    this.renderBottomRowCards();
    this.showToast(this.state.lang === "uz" ? "Maqsadlar yangilandi!" : "Targets updated!");
  }

  // ============================================================
  // 15. QUICK LOG MODALS (STEPS, WATER, MEDITATION, SLEEP)
  // ============================================================
  openQuickLogModal(type) {
    this.quickLogModal.classList.add("open");
    const lang = this.state.lang || "uz";

    if (type === "activity") {
      this.quickLogTitle.textContent = lang === "uz" ? "Kunlik qadamlar soni" : (lang === "ru" ? "Внести шаги за день" : "Log Daily Steps");
      this.quickLogBody.innerHTML = `
        <div class="form-group">
          <label class="form-label">${lang === "uz" ? "Yurilgan qadamlar" : (lang === "ru" ? "Пройдено шагов" : "Steps Walked")}</label>
          <input type="number" id="quickStepsInput" class="custom-input" value="${this.state.metrics.stepsCurrent}" min="0" step="100">
        </div>
        <button class="btn-primary-pill mt-4 w-full" id="btnSaveQuickActivity">
          ${lang === "uz" ? "Qadamlarni yangilash" : "Update Steps"}
        </button>
      `;
      document.getElementById("btnSaveQuickActivity").addEventListener("click", () => {
        const v = Number(document.getElementById("quickStepsInput").value);
        if (v >= 0) {
          this.state.metrics.stepsCurrent = v;
          if (v >= this.state.targets.steps) {
            const ach = ACHIEVEMENTS_LIST.find(a => a.id === "step_hero");
            if (ach && !ach.unlocked) {
              ach.unlocked = true;
              this.addXp(50);
              this.showToast("🏆 '10 000 Qadam' yutug'i ochildi!");
            }
          }
          store.save();
          this.renderBottomRowCards();
          this.quickLogModal.classList.remove("open");
          this.showToast(lang === "uz" ? "Qadamlar saqlandi! 👣" : "Steps updated! 👣");
        }
      });
    } else if (type === "water") {
      this.quickLogTitle.textContent = lang === "uz" ? "Suv ichish me'yori" : "Log Hydration";
      this.quickLogBody.innerHTML = `
        <div class="form-group">
          <label class="form-label">${lang === "uz" ? "Ichilgan stakanlar soni" : "Glasses of water"}</label>
          <input type="number" id="quickWaterInput" class="custom-input" value="${this.state.metrics.waterGlassesCurrent}" min="0" max="20">
        </div>
        <button class="btn-primary-pill mt-4 w-full" id="btnSaveQuickWater">
          ${lang === "uz" ? "Suv miqdorini saqlash" : "Save Water"}
        </button>
      `;
      document.getElementById("btnSaveQuickWater").addEventListener("click", () => {
        const v = Number(document.getElementById("quickWaterInput").value);
        if (v >= 0) {
          this.state.metrics.waterGlassesCurrent = v;
          store.save();
          this.renderBottomRowCards();
          this.quickLogModal.classList.remove("open");
          this.showToast(lang === "uz" ? "Suv miqdori yangilandi! 💧" : "Water logged! 💧");
        }
      });
    } else if (type === "meditation") {
      this.quickLogTitle.textContent = lang === "uz" ? "Meditatsiya vaqti" : "Log Meditation";
      this.quickLogBody.innerHTML = `
        <div class="form-group">
          <label class="form-label">${lang === "uz" ? "Daqiqalar" : "Minutes"}</label>
          <input type="number" id="quickMeditationInput" class="custom-input" value="${this.state.metrics.meditationMinutesCurrent}" min="0">
        </div>
        <button class="btn-primary-pill mt-4 w-full" id="btnSaveQuickMeditation">
          ${lang === "uz" ? "Meditatsiyani saqlash" : "Save Meditation"}
        </button>
      `;
      document.getElementById("btnSaveQuickMeditation").addEventListener("click", () => {
        const v = Number(document.getElementById("quickMeditationInput").value);
        if (v >= 0) {
          this.state.metrics.meditationMinutesCurrent = v;
          this.addXp(15);
          store.save();
          this.renderBottomRowCards();
          this.quickLogModal.classList.remove("open");
          this.showToast(lang === "uz" ? "Meditatsiya saqlandi! +15 XP 🧘" : "Meditation saved! 🧘");
        }
      });
    } else if (type === "sleep") {
      this.quickLogTitle.textContent = lang === "uz" ? "Uyqu vaqti va sifati" : "Log Sleep";
      this.quickLogBody.innerHTML = `
        <div class="form-group">
          <label class="form-label">${lang === "uz" ? "Uyqu davomiyligi (soat)" : "Sleep Hours"}</label>
          <input type="number" step="0.1" id="quickSleepInput" class="custom-input" value="${this.state.metrics.sleepHoursCurrent}">
        </div>
        <div class="form-group">
          <label class="form-label">${lang === "uz" ? "Uyqu oralig'i (masalan, 23:00 – 06:20)" : "Sleep Interval"}</label>
          <input type="text" id="quickSleepIntervalInput" class="custom-input" value="${this.state.metrics.sleepInterval}">
        </div>
        <button class="btn-primary-pill mt-4 w-full" id="btnSaveQuickSleep">
          ${lang === "uz" ? "Uyquni saqlash" : "Save Sleep"}
        </button>
      `;
      document.getElementById("btnSaveQuickSleep").addEventListener("click", () => {
        const h = Number(document.getElementById("quickSleepInput").value);
        const intv = document.getElementById("quickSleepIntervalInput").value.trim();
        if (h > 0) this.state.metrics.sleepHoursCurrent = h;
        if (intv) this.state.metrics.sleepInterval = intv;
        store.save();
        this.renderBottomRowCards();
        this.quickLogModal.classList.remove("open");
        this.showToast(lang === "uz" ? "Uyqu ko'rsatkichlari saqlandi! 🌙" : "Sleep saved! 🌙");
      });
    }
  }

  // ============================================================
  // 16. REWARD & AUTH MODALS
  // ============================================================
  openRewardModal() {
    const lang = this.state.lang || "uz";
    const dict = i18n[lang];
    this.rewardMessageText.textContent = lang === "uz"
      ? "Bugungi barcha maqsadlaringiz muvaffaqiyatli bajarildi! Aql, Tana va Energiya mukammal uyg'unlikka erishdi."
      : (lang === "ru" ? "Все цели на сегодня успешно выполнены! Разум, Тело и Энергия в гармонии." : "All your daily habits are fulfilled in pure harmony!");
    this.addXp(50);
    this.rewardModal.classList.add("open");
  }

  openAuthModal() {
    this.authModal.classList.add("open");
  }

  // ============================================================
  // 17. BACKUP & RESTORE
  // ============================================================
  exportDataJSON() {
    const a = document.createElement("a");
    a.href = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(this.state, null, 2));
    a.download = `sarv_habit_${Date.now()}.json`;
    document.body.appendChild(a);
    a.click();
    a.remove();
    this.showToast(this.state.lang === "uz" ? "Ma'lumotlar eksport qilindi!" : "Data exported!");
  }

  importDataJSON(e) {
    const f = e.target.files[0];
    if (!f) return;
    const r = new FileReader();
    r.onload = (evt) => {
      try {
        const d = JSON.parse(evt.target.result);
        if (d.habits && d.user) {
          this.state = d;
          store.state = d;
          store.save();
          this.renderAll();
          this.showToast(this.state.lang === "uz" ? "Zaxira nusxasi tiklandi!" : "Backup restored!");
        }
      } catch (err) {
        alert("Fayl formati noto'g'ri.");
      }
    };
    r.readAsText(f);
  }

  showToast(msg) {
    const t = document.createElement("div");
    t.className = "toast";
    t.innerHTML = `<span>✨</span><span>${msg}</span>`;
    this.toastContainer.appendChild(t);
    setTimeout(() => {
      t.style.opacity = "0";
      t.style.transform = "translateY(10px)";
      t.style.transition = "all 0.3s ease";
      setTimeout(() => t.remove(), 300);
    }, 3200);
  }

  // Master Render
  renderAll() {
    this.renderHeader();
    this.renderDailyFocus();
    this.renderBalanceRings();
    this.renderTodaysGoals();
    this.renderMiniCalendar();
    this.renderFullCalendar();
    this.renderBottomRowCards();
    this.renderHeatmap();
    this.updateTimerDisplay();
    this.renderJourneyAndAchievements();
    this.renderHabitsModule("all");
    this.renderAnalyticsModule();
    this.renderNotesFeed();
    this.renderMoodHistory();
    this.renderAiChat();
    this.renderSettingsValues();
  }
}

// Global initialization
document.addEventListener("DOMContentLoaded", () => {
  window.sarvHabitApp = new SarvHabitApp();
});
