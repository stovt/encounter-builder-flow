// @flow
import React from 'react';
import { injectIntl } from 'react-intl';
import type { IntlShape } from 'react-intl';
import type { Monster } from 'shared/types/monsters';
import Divider from 'shared/components/Divider';
import { CR_INFO } from 'shared/constants';
import InfoTable from './InfoTable';
import StyledMonsterInfoModal from './MonsterInfoModal.styled';

type Props = {
  monster: Monster,
  intl: IntlShape
}

const MonsterInfoModal = ({ monster, intl: { formatMessage } }: Props) => {
  const translatedType: string = formatMessage({ id: `monster.types.${monster.type}` });
  const mainType: string = translatedType.charAt(0).toLowerCase() + translatedType.slice(1);

  const type = `${mainType}${monster.subtype ? ` (${monster.subtype})` : ''}`;
  const size = formatMessage({ id: `monster.sizes.${monster.size}` });
  const description = `${size} ${type}, ${monster.alignment}`;

  const {
    strength_save: strengthSave, dexterity_save: dexteritySave, constitution_save: constitutionSave,
    intelligence_save: intelligenceSave, wisdom_save: wisdomSave, charisma_save: charismaSave
  } = monster;

  const savingThrows = `\
${strengthSave ? `${formatMessage({ id: 'monster.STR' })} ${strengthSave > 0 ? '+' : '-'}${strengthSave}, ` : ''}\
${dexteritySave ? `${formatMessage({ id: 'monster.DEX' })} ${dexteritySave > 0 ? '+' : '-'}${dexteritySave}, ` : ''}\
${constitutionSave ? `${formatMessage({ id: 'monster.CON' })} ${constitutionSave > 0 ? '+' : '-'}${constitutionSave}, ` : ''}\
${intelligenceSave ? `${formatMessage({ id: 'monster.INT' })} ${intelligenceSave > 0 ? '+' : '-'}${intelligenceSave}, ` : ''}\
${wisdomSave ? `${formatMessage({ id: 'monster.WIS' })} ${wisdomSave > 0 ? '+' : '-'}${wisdomSave}, ` : ''}\
${charismaSave ? `${formatMessage({ id: 'monster.CHA' })} ${charismaSave > 0 ? '+' : '-'}${charismaSave}, ` : ''}\
`.slice(0, -2);

  const {
    acrobatics, animal_handling: animalHandling, arcana, athletics,
    deception, history, insight, intimidation, investigation,
    medicine, nature, perception, performance, persuasion,
    religion, sleight_of_hand: sleightOfHand, stealth, survival
  } = monster;

  const skills = `\
${acrobatics ? `${formatMessage({ id: 'monster.skill-types.acrobatics' })} ${acrobatics > 0 ? '+' : '-'}${acrobatics}, ` : ''}\
${animalHandling ? `${formatMessage({ id: 'monster.skill-types.animal-handling' })} ${animalHandling > 0 ? '+' : '-'}${animalHandling}, ` : ''}\
${arcana ? `${formatMessage({ id: 'monster.skill-types.arcana' })} ${arcana > 0 ? '+' : '-'}${arcana}, ` : ''}\
${athletics ? `${formatMessage({ id: 'monster.skill-types.athletics' })} ${athletics > 0 ? '+' : '-'}${athletics}, ` : ''}\
${deception ? `${formatMessage({ id: 'monster.skill-types.deception' })} ${deception > 0 ? '+' : '-'}${deception}, ` : ''}\
${history ? `${formatMessage({ id: 'monster.skill-types.history' })} ${history > 0 ? '+' : '-'}${history}, ` : ''}\
${insight ? `${formatMessage({ id: 'monster.skill-types.insight' })} ${insight > 0 ? '+' : '-'}${insight}, ` : ''}\
${intimidation ? `${formatMessage({ id: 'monster.skill-types.intimidation' })} ${intimidation > 0 ? '+' : '-'}${intimidation}, ` : ''}\
${investigation ? `${formatMessage({ id: 'monster.skill-types.investigation' })} ${investigation > 0 ? '+' : '-'}${investigation}, ` : ''}\
${medicine ? `${formatMessage({ id: 'monster.skill-types.medicine' })} ${medicine > 0 ? '+' : '-'}${medicine}, ` : ''}\
${nature ? `${formatMessage({ id: 'monster.skill-types.nature' })} ${nature > 0 ? '+' : '-'}${nature}, ` : ''}\
${perception ? `${formatMessage({ id: 'monster.skill-types.perception' })} ${perception > 0 ? '+' : '-'}${perception}, ` : ''}\
${performance ? `${formatMessage({ id: 'monster.skill-types.performance' })} ${performance > 0 ? '+' : '-'}${performance}, ` : ''}\
${persuasion ? `${formatMessage({ id: 'monster.skill-types.persuasion' })} ${persuasion > 0 ? '+' : '-'}${persuasion}, ` : ''}\
${religion ? `${formatMessage({ id: 'monster.skill-types.religion' })} ${religion > 0 ? '+' : '-'}${religion}, ` : ''}\
${sleightOfHand ? `${formatMessage({ id: 'monster.skill-types.sleight-of-hand' })} ${sleightOfHand > 0 ? '+' : '-'}${sleightOfHand}, ` : ''}\
${stealth ? `${formatMessage({ id: 'monster.skill-types.stealth' })} ${stealth > 0 ? '+' : '-'}${stealth}, ` : ''}\
${survival ? `${formatMessage({ id: 'monster.skill-types.survival' })} ${survival > 0 ? '+' : '-'}${survival}, ` : ''}\
`.slice(0, -2);

  return (
    <StyledMonsterInfoModal>
      <div><b>{description}</b></div>
      <div><b>{formatMessage({ id: 'monster.armor-class' })}</b> {monster.armor_class}</div>
      <div><b>{formatMessage({ id: 'monster.hit-points' })}</b> {monster.hit_points} ({monster.hit_dice})</div>
      <div><b>{formatMessage({ id: 'monster.speed' })}</b> {monster.speed}</div>
      <div>
        <InfoTable
          data={[{
            str: monster.strength,
            dex: monster.dexterity,
            con: monster.constitution,
            int: monster.intelligence,
            wis: monster.wisdom,
            cha: monster.charisma
          }]}
        />
      </div>
      {savingThrows && (
        <div><b>{formatMessage({ id: 'monster.saving-throws' })}</b> {savingThrows}</div>
      )}
      {skills && (
        <div><b>{formatMessage({ id: 'monster.skills' })}</b> {skills}</div>
      )}
      {monster.senses && (
        <div><b>{formatMessage({ id: 'monster.senses' })}</b> {monster.senses}</div>
      )}
      {monster.languages && (
        <div><b>{formatMessage({ id: 'monster.languages' })}</b> {monster.languages}</div>
      )}
      <div><b>{formatMessage({ id: 'monster.cr' })}</b> {monster.challenge_rating} ({CR_INFO[monster.challenge_rating].exp} {formatMessage({ id: 'monster.xps' })})</div>
      {monster.special_abilities && (
        <>
          <Divider />
          {monster.special_abilities.map(ability => (
            <div key={ability.name}><b>{ability.name}. </b>{ability.desc}</div>
          ))}
        </>
      )}
      {monster.actions && (
        <>
          <Divider />
          <div><b>{formatMessage({ id: 'monster.actions' })}</b></div>
          {monster.actions.map(action => (
            <div key={action.name}><b>{action.name}. </b>{action.desc}</div>
          ))}
        </>
      )}
      {monster.legendary_actions && (
        <>
          <Divider />
          <div><b>{formatMessage({ id: 'monster.legendary-actions' })}</b></div>
          {monster.legendary_actions.map(action => (
            <div key={action.name}><b>{action.name}. </b>{action.desc}</div>
          ))}
        </>
      )}
    </StyledMonsterInfoModal>
  );
};

export default injectIntl(MonsterInfoModal);
