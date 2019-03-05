// @flow
import React from 'react';
import { injectIntl } from 'react-intl';
import type { IntlShape } from 'react-intl';
import type { Monster } from 'shared/types/encounterBuilder';
import InfoTable from './InfoTable';
import StyledMonsterInfoModal from './MonsterInfoModal.styled';

type Props = {
  monster: Monster,
  intl: IntlShape
}

const MonsterInfoModal = ({ monster, intl: { formatMessage } }: Props) => {
  const typeValues: string[] = monster.data.type.split(' (');
  const translatedType: string = formatMessage({ id: `monster.types.${typeValues[0]}` });
  const mainType: string = translatedType.charAt(0).toLowerCase() + translatedType.slice(1);
  const typeDescription: string = ` (${typeValues[1]}`;

  const type = `${mainType}${typeValues[1] ? typeDescription : ''}`;
  const size = formatMessage({ id: `monster.sizes.${monster.data.size}` });
  const { data: { alignment } } = monster;

  const description = `${size} ${type}, ${alignment}`;

  let actions;
  if (Array.isArray(monster.data.actions)) {
    actions = monster.data.actions.map((action) => {
      const actionValues: string[] = action.split('.');
      const actionName = actionValues[0];
      return <div key={action}><b>{actionName}. </b>{action.slice(actionName.length + 2)}</div>;
    });
  } else {
    const actionValues: string[] = monster.data.actions.split('.');
    const actionName = actionValues[0];
    actions = <div><b>{actionName}. </b>{monster.data.actions.slice(actionName.length + 2)}</div>;
  }

  return (
    <StyledMonsterInfoModal>
      <div><b>{description}</b></div>
      <div><b>{formatMessage({ id: 'monster.armor-class' })}</b> {monster.data.ac}</div>
      <div><b>{formatMessage({ id: 'monster.hit-points' })}</b> {monster.data.hp} ({monster.data.hpDice})</div>
      <div><b>{formatMessage({ id: 'monster.speed' })}</b> {monster.data.speed}</div>
      <div>
        <InfoTable
          data={[{
            str: monster.data.str,
            dex: monster.data.dex,
            con: monster.data.con,
            int: monster.data.int,
            wis: monster.data.wis,
            cha: monster.data.cha
          }]}
        />
      </div>
      {monster.data.skills && (
        <div><b>{formatMessage({ id: 'monster.skills' })}</b> {monster.data.skills}</div>
      )}
      {monster.data.senses && (
        <div><b>{formatMessage({ id: 'monster.senses' })}</b> {monster.data.senses}</div>
      )}
      {monster.data.languages && (
        <div><b>{formatMessage({ id: 'monster.languages' })}</b> {monster.data.languages}</div>
      )}
      <div><b>{formatMessage({ id: 'monster.cr' })}</b> {monster.data.cr} ({monster.data.exp} {formatMessage({ id: 'monster.xps' })})</div>
      {Array.isArray(monster.data.additionalStats)
        ? monster.data.additionalStats.map(additionalStat => (
          <div key={additionalStat}>{additionalStat}</div>
        ))
        : <div>{monster.data.additionalStats}</div>
      }
      <div><b>{formatMessage({ id: 'monster.actions' })}</b></div>
      {actions}
    </StyledMonsterInfoModal>
  );
};

export default injectIntl(MonsterInfoModal);
