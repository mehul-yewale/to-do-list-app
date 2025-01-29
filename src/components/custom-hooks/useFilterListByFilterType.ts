import { useMemo } from 'react';
import { TodoItem, FilterType, FilterTypeEnum} from '../../types/common';
const useFilterListByFilterType = (listState: TodoItem[], selectedFilter: FilterType) => {
    const filteredList = useMemo(() => {
      switch (selectedFilter) {
        case FilterTypeEnum.ALL : return listState;
        case FilterTypeEnum.ACTIVE : return listState.filter((item:TodoItem) => !item.completed);
        case FilterTypeEnum.COMPLETED : return listState.filter((item:TodoItem) => item.completed);
        default: return listState;
      }
    }, [selectedFilter, listState]);
    return filteredList;
};

export default useFilterListByFilterType;