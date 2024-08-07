

const STAGES_STORAGE_KEY = 'customStages';

interface category {
    category: string;
    names: string[];
}
export const saveStagestoLocalStorage = (stages: category[]) => {
    localStorage.setItem(STAGES_STORAGE_KEY, JSON.stringify(stages));
};

export const loadStagesFromLocalStorage = (): category[] | null => {
    const storedStages = localStorage.getItem(STAGES_STORAGE_KEY);
    return storedStages ? JSON.parse(storedStages) : null;
};