import FullCalendar from '@fullcalendar/vue3';
import { __VLS_internalComponent, __VLS_componentsOption, __VLS_name } from './calendar.vue';

function __VLS_template() {
let __VLS_ctx!: InstanceType<__VLS_PickNotAny<typeof __VLS_internalComponent, new () => {}>> & {};
/* Components */
let __VLS_otherComponents!: NonNullable<typeof __VLS_internalComponent extends { components: infer C; } ? C : {}> & typeof __VLS_componentsOption;
let __VLS_own!: __VLS_SelfComponent<typeof __VLS_name, typeof __VLS_internalComponent & typeof __VLS_publicComponent & (new () => { $slots: typeof __VLS_slots; })>;
let __VLS_localComponents!: typeof __VLS_otherComponents & Omit<typeof __VLS_own, keyof typeof __VLS_otherComponents>;
let __VLS_components!: typeof __VLS_localComponents & __VLS_GlobalComponents & typeof __VLS_ctx;
/* Style Scoped */
type __VLS_StyleScopedClasses = {};
let __VLS_styleScopedClasses!: __VLS_StyleScopedClasses | keyof __VLS_StyleScopedClasses | (keyof __VLS_StyleScopedClasses)[];
/* CSS variable injection */
/* CSS variable injection end */
let __VLS_resolvedLocalAndGlobalComponents!: {} &
__VLS_WithComponent<'FullCalendar', typeof __VLS_localComponents, "FullCalendar", "FullCalendar", "FullCalendar">;
({} as __VLS_IntrinsicElements).h1; ({} as __VLS_IntrinsicElements).h1;
__VLS_components.FullCalendar; __VLS_components.FullCalendar;
// @ts-ignore
[FullCalendar, FullCalendar,];
{
const __VLS_0 = ({} as __VLS_IntrinsicElements)["h1"];
const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, {});
({} as __VLS_IntrinsicElements).h1;
({} as __VLS_IntrinsicElements).h1;
const __VLS_2 = __VLS_1({ ...{ ...{}, }, }, ...__VLS_functionalComponentArgsRest(__VLS_1));
const __VLS_3 = __VLS_pickFunctionalComponentCtx(__VLS_0, __VLS_2)!;
(__VLS_3.slots!).default;
}
{
let __VLS_4!: 'FullCalendar' extends keyof typeof __VLS_ctx ? typeof __VLS_ctx.FullCalendar : (typeof __VLS_resolvedLocalAndGlobalComponents)['FullCalendar'];
const __VLS_5 = __VLS_asFunctionalComponent(__VLS_4, new __VLS_4({ ...{}, options: ((__VLS_ctx.calendarOptions)), }));
({} as { FullCalendar: typeof __VLS_4; }).FullCalendar;
({} as { FullCalendar: typeof __VLS_4; }).FullCalendar;
const __VLS_6 = __VLS_5({ ...{ ...{}, options: ((__VLS_ctx.calendarOptions)), }, }, ...__VLS_functionalComponentArgsRest(__VLS_5));
const __VLS_7 = __VLS_pickFunctionalComponentCtx(__VLS_4, __VLS_6)!;
}
if (typeof __VLS_styleScopedClasses === 'object' && !Array.isArray(__VLS_styleScopedClasses)) {
}
var __VLS_slots!: {};
// @ts-ignore
[calendarOptions, calendarOptions,];
return __VLS_slots;
}
